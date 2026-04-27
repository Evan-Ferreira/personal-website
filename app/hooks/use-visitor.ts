'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { load } from '@fingerprintjs/fingerprintjs';

export function useVisitor() {
    const [visitorId, setVisitorId] = useState<string | null>(() => {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem('visitor_id');
    });

    const { mutate, data, isPending, isError, error } = useMutation({
        mutationFn: async (visitorId: string) => {
            const res = await fetch(`/api/visitor/${visitorId}`, {
                method: 'POST',
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            return data;
        },
        onSuccess: (_, visitorId) => {
            localStorage.setItem('visitor_id', visitorId);
        },
        onError: (error) => {
            console.error('Error updating visitor data', error);
        },
    });

    useEffect(() => {
        if (visitorId) return;

        let cancelled = false;

        (async () => {
            try {
                const fp = await load();
                const { visitorId } = await fp.get();
                if (cancelled) return;
                setVisitorId(visitorId);
                mutate(visitorId);
            } catch {
                console.error('Error fetching visitor ID');
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [mutate, visitorId]);

    return {
        visitorId,
        visitorData: data,
        isPending,
        isError,
        error,
    };
}
