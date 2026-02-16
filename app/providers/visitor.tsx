'use client';

import { createContext } from 'react';
import { useVisitor } from '@/app/hooks/use-visitor';

export const VisitorContext = createContext<string | null>(null);

export default function VisitorProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { visitorId } = useVisitor();

    return (
        <VisitorContext.Provider value={visitorId}>
            {children}
        </VisitorContext.Provider>
    );
}
