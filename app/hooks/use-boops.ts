'use client';

import { useEffect, useRef, useState } from 'react';

export const STORAGE_KEY = (slug: string) => `boops-${slug}`;
export const MAX_BOOPS = 5;

export function useBoops(slug: string) {
    const [totalBoops, setTotalBoops] = useState(0);
    const [isMaxed, setIsMaxed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const userBoopsRef = useRef(0);

    useEffect(() => {
        userBoopsRef.current = 0;
        setIsMaxed(false);
        setTotalBoops(0);
        setIsLoading(true);
        (async () => {
            const stored = localStorage.getItem(STORAGE_KEY(slug));

            if (stored) {
                const parsed = parseInt(stored, 10);
                if (!isNaN(parsed) && parsed <= MAX_BOOPS) {
                    userBoopsRef.current = parsed;
                    setIsMaxed(parsed >= MAX_BOOPS);
                }
            } else {
                localStorage.setItem(STORAGE_KEY(slug), String(0));
                setIsMaxed(false);
            }

            try {
                const res = await fetch(
                    `/api/blog/${encodeURIComponent(slug)}/boops`,
                );
                if (!res.ok) {
                    throw new Error('Error fetching boops');
                }
                const { boops } = await res.json();

                setTotalBoops(boops);
            } catch (error) {
                console.error('Error fetching boops');
            } finally {
                setIsLoading(false);
            }
        })();
    }, [slug]);

    function rollbackBoops() {
        userBoopsRef.current = Math.max(userBoopsRef.current - 1, 0);
        localStorage.setItem(STORAGE_KEY(slug), String(userBoopsRef.current));
        setTotalBoops((boops) => Math.max(boops - 1, 0));
        if (userBoopsRef.current < MAX_BOOPS) {
            setIsMaxed(false);
        }
    }

    async function incrementBoops() {
        try {
            if (userBoopsRef.current >= MAX_BOOPS) return false;

            userBoopsRef.current += 1;
            const next = userBoopsRef.current;
            setTotalBoops((boops) => boops + 1);
            if (next >= MAX_BOOPS) {
                setIsMaxed(true);
            }
            localStorage.setItem(STORAGE_KEY(slug), String(next));

            const res = await fetch(
                `/api/blog/${encodeURIComponent(slug)}/boops`,
                {
                    method: 'PATCH',
                    body: JSON.stringify({ increment_amount: 1 }),
                },
            );

            if (!res.ok) {
                rollbackBoops();
                throw new Error('Error saving incremented to the database');
            }

            return true;
        } catch (error) {
            console.error('Error saving incremented boops');
            return false;
        }
    }

    return {
        totalBoops,
        userBoops: userBoopsRef.current,
        incrementBoops,
        isMaxed,
        isLoading,
    };
}
