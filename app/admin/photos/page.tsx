'use client';

import { useMemo, useRef, useState } from 'react';
import { photos as existingPhotos } from '@/app/life/photos';
import imageCompression from 'browser-image-compression';

// MAX_EDGE is the maximum width or height of the image before compression.
const MAX_EDGE = 2400;
const JPEG_QUALITY = 0.9;
const MAX_SIZE_MB = 5;

export default function AdminPhotosPage() {
    const [file, setFile] = useState<File | null>(null);
    const [caption, setCaption] = useState('');
    const [tags, setTags] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [prUrl, setPrUrl] = useState<string | null>(null);
    const fileInput = useRef<HTMLInputElement>(null);

    const knownTags = [
        ...new Set(existingPhotos.flatMap((p) => p.tags)),
    ].sort();

    const previewUrl = useMemo(
        () => (file ? URL.createObjectURL(file) : null),
        [file],
    );

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!file || !caption.trim() || !tags.trim()) return;

        try {
            setIsLoading(true);
            setError(null);
            let upload: Blob;
            try {
                upload = await imageCompression(file, {
                    maxSizeMB: MAX_SIZE_MB,
                    useWebWorker: true,
                    initialQuality: JPEG_QUALITY,
                    maxWidthOrHeight: MAX_EDGE,
                    fileType: 'image/jpeg',
                });
            } catch {
                upload = file; // fall back to the original; server will validate
            }

            const body = new FormData();
            body.append('file', upload, 'upload.jpg');
            body.append('caption', caption.trim());
            body.append('tags', tags);

            const res = await fetch('/api/admin/photos', {
                method: 'POST',
                body,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || 'Upload failed.');
            }

            setPrUrl(data?.prUrl ?? null);
            setFile(null);
            setCaption('');
            setTags('');
            if (fileInput.current) fileInput.current.value = '';
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Something went wrong.',
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <label className="flex flex-col items-center gap-1 cursor-pointer text-fg-secondary hover:text-fg-primary active:text-fg-primary transition-all ease-in-out duration-150">
                    <input
                        ref={fileInput}
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        className="sr-only"
                    />
                    <span className="text-fg-secondary hover:text-fg-primary active:text-fg-primary transition-all ease-in-out duration-150">
                        {file ? 'Change photo' : 'Choose photo'}
                    </span>
                </label>

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
                    disabled={isLoading || !file || !caption.trim()}
                    className="text-fg-secondary disabled:opacity-50 hover:text-fg-tertiary active:text-fg-primary transition-all ease-in-out duration-150"
                >
                    {isLoading ? 'Compressing…' : 'Compress & Open PR'}
                </button>
            </form>

            {prUrl && !isLoading && (
                <p className="text-fg-primary">
                    PR opened.{' '}
                    <a
                        href={prUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        Review &amp; merge to publish →
                    </a>
                </p>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
