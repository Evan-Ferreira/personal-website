'use client';

import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { load } from '@fingerprintjs/fingerprintjs';

export function useVisitor() {
    const [visitorId, setVisitorId] = useState<string | null>(null);

    const mutation = useMutation({
        mutationFn: async (visitorId: string) => {
            const res = await fetch(`/api/visitor/${visitorId}`, {
                method: 'POST',
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            return data;
        },
        onSuccess: (_, visitorId) => {
            sessionStorage.setItem('visitor_id', visitorId);
        },
        onError: (error) => {
            console.error('Error updating visitor data', error);
        },
    });

    useEffect(() => {
        const sessionVisitorId = sessionStorage.getItem('visitor_id');
        if (sessionVisitorId) {
            setVisitorId(sessionVisitorId);
            return;
        }
        (async () => {
            try {
                const fp = await load();
                const { visitorId } = await fp.get();
                setVisitorId(visitorId);
                mutation.mutate(visitorId);
            } catch (error) {
                console.error('Error fetching visitor ID');
            }
        })();
    }, []);

    return {
        visitorId,
        visitorData: mutation.data,
        isPending: mutation.isPending,
        isError: mutation.isError,
        error: mutation.error,
    };
}
