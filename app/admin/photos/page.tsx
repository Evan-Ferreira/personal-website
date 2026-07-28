'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { photos as existingPhotos } from '@/app/life/photos';

// Cap the longest edge before upload: shrinks mobile-data uploads and, on iOS,
// re-encodes HEIC → JPEG via the canvas (Safari decodes HEIC natively) so sharp
// on the server always receives a JPEG it can read.
const MAX_EDGE = 2400;
const JPEG_QUALITY = 0.9;

async function toUploadJpeg(file: File): Promise<Blob> {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const w = Math.round(bitmap.width * scale);
    const h = Math.round(bitmap.height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('no canvas context');
    ctx.drawImage(bitmap, 0, 0, w, h);
    bitmap.close();

    return await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
            (blob) => (blob ? resolve(blob) : reject(new Error('encode failed'))),
            'image/jpeg',
            JPEG_QUALITY,
        );
    });
}

type Status =
    | { kind: 'idle' }
    | { kind: 'working'; label: string }
    | { kind: 'done'; prUrl: string }
    | { kind: 'error'; message: string };

export default function AdminPhotosPage() {
    const [file, setFile] = useState<File | null>(null);
    const [caption, setCaption] = useState('');
    const [tags, setTags] = useState('');
    const [status, setStatus] = useState<Status>({ kind: 'idle' });
    const fileInput = useRef<HTMLInputElement>(null);

    const knownTags = useMemo(
        () => [...new Set(existingPhotos.flatMap((p) => p.tags))].sort(),
        [],
    );

    const previewUrl = useMemo(
        () => (file ? URL.createObjectURL(file) : null),
        [file],
    );

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!file || !caption.trim()) return;

        try {
            setStatus({ kind: 'working', label: 'Preparing image…' });
            let upload: Blob;
            try {
                upload = await toUploadJpeg(file);
            } catch {
                upload = file; // fall back to the original; server will validate
            }

            setStatus({ kind: 'working', label: 'Uploading…' });
            const body = new FormData();
            body.append('file', upload, 'upload.jpg');
            body.append('caption', caption.trim());
            body.append('tags', tags);

            const res = await fetch('/api/admin/photos', {
                method: 'POST',
                body,
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setStatus({ kind: 'error', message: data.error || 'Upload failed.' });
                return;
            }

            setStatus({ kind: 'done', prUrl: data.prUrl });
            setFile(null);
            setCaption('');
            setTags('');
            if (fileInput.current) fileInput.current.value = '';
        } catch {
            setStatus({ kind: 'error', message: 'Something went wrong.' });
        }
    }

    const working = status.kind === 'working';

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-fg-primary text-lg">Add a photo</h1>
                <Link href="/admin" className="text-fg-secondary">
                    ← Admin
                </Link>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <input
                    ref={fileInput}
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    className="text-fg-secondary"
                />

                {previewUrl && (
                    // eslint-disable-next-line @next/next/no-img-element -- local object URL preview
                    <img
                        src={previewUrl}
                        alt="Selected preview"
                        className="w-full aspect-[4/3] object-cover rounded-md"
                    />
                )}

                <label className="flex flex-col gap-1">
                    <span className="text-fg-secondary">Caption</span>
                    <input
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Starbucks – Marina District"
                        className="rounded-md border border-border px-3 py-2 bg-bg-secondary text-fg-primary"
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-fg-secondary">
                        Tags (comma-separated)
                    </span>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="San Francisco, Nature"
                        list="known-tags"
                        className="rounded-md border border-border px-3 py-2 bg-bg-secondary text-fg-primary"
                    />
                    <datalist id="known-tags">
                        {knownTags.map((t) => (
                            <option key={t} value={t} />
                        ))}
                    </datalist>
                </label>

                <button
                    type="submit"
                    disabled={working || !file || !caption.trim()}
                    className="rounded-md border border-border px-3 py-2 text-fg-primary disabled:opacity-50"
                >
                    {working ? status.label : 'Compress & open PR'}
                </button>
            </form>

            {status.kind === 'done' && (
                <p className="text-fg-primary">
                    PR opened.{' '}
                    <a
                        href={status.prUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        Review &amp; merge to publish →
                    </a>
                </p>
            )}
            {status.kind === 'error' && (
                <p className="text-red-500">{status.message}</p>
            )}
        </div>
    );
}
