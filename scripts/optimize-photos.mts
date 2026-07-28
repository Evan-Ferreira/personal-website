/**
 * Optimizes the /life gallery photos.
 *
 * Reads the curated list in `app/life/photos.ts`, and for each entry:
 *   - if the original exists in `photos/originals/<file>`, resizes it to a set of
 *     widths, crops to a 4:3 landscape box, encodes each as WebP into `public/life/`,
 *     generates a tiny base64 blur placeholder, and records intrinsic dimensions;
 *   - if the original is MISSING but a prior entry with the same `base` already exists
 *     in `app/life/photos.generated.ts`, carries that entry's binary/dimension data
 *     forward (refreshing only tags/description/alt). This is what keeps photos added
 *     from the /admin portal working — their originals are never committed.
 *
 * Then writes `app/life/photos.generated.ts` (the manifest the page renders).
 *
 * Run with: bun run optimize:photos
 * Only optimized WebP files (small) + the manifest get committed. Originals stay git-ignored.
 */
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { photos as inputs, type PhotoInput } from '../app/life/photos.ts';
import { photos as existingGenerated } from '../app/life/photos.generated.ts';
import {
    optimizePhoto,
    renderManifest,
    slugOf,
    type GeneratedPhoto,
} from '../lib/photos/optimize.ts';

const ROOT = path.resolve(import.meta.dirname, '..');
const ORIGINALS_DIR = path.join(ROOT, 'photos', 'originals');
const OUTPUT_DIR = path.join(ROOT, 'public', 'life');
const MANIFEST_PATH = path.join(ROOT, 'app', 'life', 'photos.generated.ts');

const existingByBase = new Map<string, GeneratedPhoto>(
    existingGenerated.map((p) => [p.base, p]),
);

async function processPhoto(input: PhotoInput): Promise<GeneratedPhoto> {
    const slug = slugOf(input.file);
    const base = `/life/${slug}`;
    const originalPath = path.join(ORIGINALS_DIR, input.file);
    const text = {
        tags: input.tags,
        description: input.description,
        alt: input.alt ?? input.description,
    };

    if (existsSync(originalPath)) {
        const buffer = await readFile(originalPath);
        const opt = await optimizePhoto(buffer);
        for (const file of opt.files) {
            const outPath = path.join(OUTPUT_DIR, `${slug}-${file.width}.webp`);
            await writeFile(outPath, file.data);
        }
        return {
            base,
            widths: opt.widths,
            width: opt.width,
            height: opt.height,
            blurDataURL: opt.blurDataURL,
            ...text,
        };
    }

    // No original on disk — carry forward the already-optimized entry if we have one.
    const existing = existingByBase.get(base);
    if (existing) {
        return { ...existing, ...text };
    }

    throw new Error(
        `Missing original: ${path.relative(ROOT, originalPath)} (referenced by ` +
            `app/life/photos.ts) and no existing generated entry for ${base}.`,
    );
}

async function main() {
    await mkdir(ORIGINALS_DIR, { recursive: true });
    await mkdir(OUTPUT_DIR, { recursive: true });

    if (inputs.length === 0) {
        console.log(
            'No photos listed in app/life/photos.ts — writing empty manifest.',
        );
    }

    const generated: GeneratedPhoto[] = [];
    for (const input of inputs) {
        process.stdout.write(`Optimizing ${input.file} … `);
        const photo = await processPhoto(input);
        generated.push(photo);
        const carried = !existsSync(path.join(ORIGINALS_DIR, input.file));
        console.log(
            carried
                ? `carried forward (${photo.widths.join('/')}w)`
                : `done (${photo.widths.join('/')}w)`,
        );
    }

    await writeFile(MANIFEST_PATH, renderManifest(generated), 'utf8');
    console.log(
        `\nWrote ${generated.length} photo(s) to app/life/photos.generated.ts and public/life/.`,
    );
}

main().catch((err) => {
    console.error(`\noptimize:photos failed: ${err.message}`);
    process.exit(1);
});
