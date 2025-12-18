import { ReactNode } from 'react';

type color = 'orange' | 'green';

export function Badge({
    children,
    color,
}: {
    children: ReactNode;
    color: color;
}) {
    return (
        <span className="w-fit inline px-2 py-0.5 text-[8px] uppercase tracking-wider bg-accent/20 text-accent rounded">
            {children}
        </span>
    );
}
