import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth/session';
import {
    optimizePhoto,
    renderManifest,
    type GeneratedPhoto,
} from '@/lib/photos/optimize';
import { openPhotoPR, type CommitFile } from '@/lib/github';
import { photos as photoInputs, type PhotoInput } from '@/app/life/photos';
import { photos as generatedPhotos } from '@/app/life/photos.generated';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024; // 25 MB

async function isAuthed(): Promise<boolean> {
    const secret = process.env.ADMIN_COOKIE_SECRET;
    if (!secret) return false;
    const token = (await cookies()).get(SESSION_COOKIE)?.value;
    return token ? verifySessionToken(token, secret) : false;
}

/** Re-serialize app/life/photos.ts from the typed input array. */
function serializePhotosTs(inputs: PhotoInput[]): string {
    const header = `export type PhotoInput = {
    file: string;
    tags: string[];
    description: string;
    alt?: string;
};

// Managed by the /admin photo portal; hand-edits are preserved but reformatted on next upload.
export const photos: PhotoInput[] = `;
    return `${header}${JSON.stringify(inputs, null, 4)};\n`;
}

/** "20260727-a1b2c3" — sortable date + short random suffix, filesystem-safe. */
function makeSlug(): string {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const rand = Math.random().toString(36).slice(2, 8);
    return `life-${date}-${rand}`;
}

export async function POST(request: Request) {
    if (!(await isAuthed())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let form: FormData;
    try {
        form = await request.formData();
    } catch {
        return NextResponse.json(
            { error: 'Expected multipart/form-data.' },
            { status: 400 },
        );
    }

    const file = form.get('file');
    const caption = String(form.get('caption') ?? '').trim();
    const tags = String(form.get('tags') ?? '')
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

    if (!(file instanceof File)) {
        return NextResponse.json({ error: 'No image provided.' }, { status: 400 });
    }
    if (!caption) {
        return NextResponse.json({ error: 'A caption is required.' }, { status: 400 });
    }
    if (!file.type.startsWith('image/')) {
        return NextResponse.json(
            { error: 'Uploaded file is not an image.' },
            { status: 400 },
        );
    }
    if (file.size > MAX_UPLOAD_BYTES) {
        return NextResponse.json(
            { error: 'Image is too large (max 25 MB).' },
            { status: 413 },
        );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    let optimized;
    try {
        optimized = await optimizePhoto(buffer);
    } catch {
        return NextResponse.json(
            {
                error:
                    'Could not decode that image. If it is a HEIC from iOS, try re-taking or converting to JPEG.',
            },
            { status: 422 },
        );
    }

    const slug = makeSlug();
    const base = `/life/${slug}`;

    const newInput: PhotoInput = {
        file: `${slug}.jpg`,
        tags,
        description: caption,
    };
    const newGenerated: GeneratedPhoto = {
        base,
        widths: optimized.widths,
        width: optimized.width,
        height: optimized.height,
        blurDataURL: optimized.blurDataURL,
        tags,
        description: caption,
        alt: caption,
    };

    const files: CommitFile[] = [
        ...optimized.files.map((f) => ({
            path: `public/life/${slug}-${f.width}.webp`,
            data: f.data,
        })),
        { path: 'app/life/photos.ts', text: serializePhotosTs([...photoInputs, newInput]) },
        {
            path: 'app/life/photos.generated.ts',
            text: renderManifest([...generatedPhotos, newGenerated]),
        },
    ];

    try {
        const pr = await openPhotoPR({
            branch: `admin/photo-${slug}`,
            title: `photo: ${caption}`,
            files,
            body:
                `Added from the /admin portal.\n\n` +
                `- **Caption:** ${caption}\n` +
                `- **Tags:** ${tags.length ? tags.join(', ') : '—'}\n` +
                `- **Widths:** ${optimized.widths.join('/')}w\n\n` +
                `Merge to publish to \`/life\`.`,
        });
        return NextResponse.json({ ok: true, prUrl: pr.url, prNumber: pr.number });
    } catch (err) {
        return NextResponse.json(
            { error: err instanceof Error ? err.message : 'Failed to open PR.' },
            { status: 502 },
        );
    }
}
