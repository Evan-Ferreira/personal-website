import type { LifePhoto } from '@/app/life/photos.generated';

export function Photo({
    photo,
    eager = false,
}: {
    photo: LifePhoto;
    eager?: boolean;
}) {
    const srcSet = photo.widths
        .map((w) => `${photo.base}-${w}.webp ${w}w`)
        .join(', ');
    const largest = `${photo.base}-${photo.width}.webp`;

    return (
        <div className="flex flex-col gap-2">
            <div
                className="relative w-full aspect-4/3 overflow-hidden rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${photo.blurDataURL})` }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element -- pre-optimized static
                    files; a plain img keeps this a zero-JS Server Component and bypasses the
                    Vercel Image Optimizer (no runtime cost) with an accurate srcset. */}
                <img
                    src={largest}
                    srcSet={srcSet}
                    sizes="(min-width: 1024px) 400px, 100vw"
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading={eager ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={eager ? 'high' : 'auto'}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-0.5">
                {photo.tags.length > 0 && (
                    <p className="text-fg-secondary">{photo.tags.join(', ')}</p>
                )}
                <p className="text-fg-primary">{photo.description}</p>
            </div>
        </div>
    );
}
