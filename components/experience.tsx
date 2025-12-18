import { type ReactNode } from 'react';

export function Experience({
    image,
    date,
    location,
    title,
    description,
}: {
    image: ReactNode;
    date: string;
    location: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex bento-card gap-4">
            {image}
            <div className="flex flex-col justify-center gap-1 w-full">
                <div className="flex items-center justify-between">
                    <p className="text-xs">{title}</p>
                    <p className="text-fg-tertiary text-[8px] uppercase">
                        {date}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-fg-tertiary">{description}</p>
                    <p className="text-[8px] text-fg-tertiary uppercase">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
}
