'use client';

import { useBoops } from '@/app/hooks/use-boops';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FILL_PER_CLICK = 20;

export function ActionsBar({
    boops: previousBoops,
    slug,
}: {
    boops: number;
    slug: string;
}) {
    const { userBoops, incrementBoops, totalBoops, isMaxed } = useBoops(
        slug,
        previousBoops,
    );

    const [boopMessage, setBoopMessage] = useState<string | null>(null);
    const [linkMessage, setLinkMessage] = useState<string | null>(null);
    const boopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const linkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function handleBoop() {
        incrementBoops();
        setBoopMessage(isMaxed ? 'Max Boops!' : 'Boop!');
        if (boopTimeoutRef.current) clearTimeout(boopTimeoutRef.current);
        boopTimeoutRef.current = setTimeout(() => setBoopMessage(null), 500);
    }

    async function handleLinkCopy() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setLinkMessage('Link copied!');
        } catch {
            setLinkMessage('Failed to copy');
        }
        if (linkTimeoutRef.current) clearTimeout(linkTimeoutRef.current);
        linkTimeoutRef.current = setTimeout(() => setLinkMessage(null), 2000);
    }

    useEffect(() => {
        return () => {
            if (boopTimeoutRef.current) clearTimeout(boopTimeoutRef.current);
            if (linkTimeoutRef.current) clearTimeout(linkTimeoutRef.current);
        };
    }, []);

    return (
        <div className="flex items-center justify-between gap-4 w-full border-t border-b border-border py-2 relative">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={handleBoop}
                    className="relative flex items-center justify-center w-8 h-8 transition-all hover:cursor-pointer
                    active:scale-110 duration-200 ease-in-out"
                    aria-label="Like"
                >
                    <span className="block w-6 h-6 relative">
                        <img
                            src="/unicorn.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="absolute inset-0 w-full h-full grayscale"
                            aria-hidden
                        />
                        <img
                            src="/unicorn.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="absolute inset-0 w-full h-full transition-[clip-path] duration-300 ease-out"
                            style={{
                                clipPath: `inset(${100 - FILL_PER_CLICK * userBoops}% 0 0 0)`,
                            }}
                            aria-hidden
                        />
                    </span>
                </button>
                <p className="text-fg-tertiary text-sm ">{totalBoops} Boops</p>
            </div>
            <button
                type="button"
                aria-label="Link"
                onClick={handleLinkCopy}
                className="hover:cursor-pointer mr-4"
            >
                <img
                    className="opacity-40 invert hover:opacity-50 transition-opacity duration-200"
                    src="/chain.svg"
                    alt="Link"
                    width={18}
                    height={18}
                />
            </button>
            <div className="absolute -top-1/2 w-full h-full pointer-events-none" role="status" aria-live="polite">
                <AnimatePresence>
                    {boopMessage && (
                        <motion.p
                            key="boop"
                            className="absolute left-0 text-sm text-fg-primary whitespace-nowrap"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {boopMessage}
                        </motion.p>
                    )}
                    {linkMessage && (
                        <motion.p
                            key="link"
                            className="absolute right-0 text-sm text-fg-primary whitespace-nowrap"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {linkMessage}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
