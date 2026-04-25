import Image from 'next/image';
import { ImageInfo } from '@/components/project';

export function Memory({
    description,
    date,
    imageInfo,
}: {
    date: string;
    description: string;
    imageInfo: ImageInfo;
}) {
    return (
        <div className="w-full relative min-h-72 flex flex-col gap-2">
            <div className="object-hidden max-h-64 h-full relative">
                <Image
                    src={imageInfo.src}
                    alt={imageInfo.alt}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col">
                <h3 className="text-fg-secondary">{date}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
