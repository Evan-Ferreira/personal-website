'use client';

import { useEffect, useState } from 'react';

export const STORAGE_KEY = (slug: string) => `boops-${slug}`;
export const MAX_BOOPS = 5;

export function useBoops(slug: string, previousBoops: number) {
    const [userBoops, setUserBoops] = useState(0);
    const [totalBoops, setTotalBoops] = useState(previousBoops);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY(slug));
        if (stored) {
            const parsed = parseInt(stored, 10);
            if (!isNaN(parsed) && parsed <= MAX_BOOPS) {
                setUserBoops(parsed);
            }
        } else {
            localStorage.setItem(STORAGE_KEY(slug), `${userBoops}`);
        }
    }, [slug]);

    async function incrementBoops() {
        try {
            if (userBoops >= MAX_BOOPS) return false;

            setUserBoops((boops) => {
                const next = boops + 1;
                const stored = localStorage.getItem(STORAGE_KEY(slug));
                if (stored) {
                    const parsed = parseInt(stored, 10);
                    if (!isNaN(parsed) && parsed >= MAX_BOOPS) {
                        return next;
                    }
                }
                localStorage.setItem(STORAGE_KEY(slug), `${next}`);
                return next;
            });

            const res = await fetch(`/api/blog/${slug}/boops`, {
                method: 'PATCH',
                body: JSON.stringify({ increment_amount: 1 }),
            });

            if (!res.ok) throw new Error('Error saving incremented boops');

            setTotalBoops((boops) => boops + 1);

            return true;
        } catch (error) {
            console.error('Error saving incremented boops');
            return false;
        }
    }

    return {
        totalBoops,
        userBoops,
        incrementBoops,
        isMaxed: userBoops >= MAX_BOOPS,
    };
}
