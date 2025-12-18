import React, { ReactNode } from 'react';

export function TechBadge({ children }: { children: ReactNode }) {
    return (
        <div className="text-[8px] text-fg-tertiary bg-bg-tertiary px-1 py-0.5 rounded">
            {children}
        </div>
    );
}
