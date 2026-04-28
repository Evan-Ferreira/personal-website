'use client';

import { useBoops } from '@/app/hooks/use-boops';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FILL_PER_CLICK = 20;

export function ActionsBar({ slug }: { slug: string }) {
    const { userBoops, incrementBoops, totalBoops, isMaxed, isLoading } =
        useBoops(slug);

    const [boopMessage, setBoopMessage] = useState<string | null>(null);

    const boopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const linkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function handleBoop() {
        incrementBoops();
        setBoopMessage(isMaxed ? 'Max Boops!' : 'Boop!');
        if (boopTimeoutRef.current) clearTimeout(boopTimeoutRef.current);
        boopTimeoutRef.current = setTimeout(() => setBoopMessage(null), 500);
    }

    useEffect(() => {
        return () => {
            if (boopTimeoutRef.current) clearTimeout(boopTimeoutRef.current);
            if (linkTimeoutRef.current) clearTimeout(linkTimeoutRef.current);
        };
    }, []);

    return (
        <div className="relative flex items-center gap-2 w-32">
            {isLoading ? (
                <>
                    <svg
                        width="0"
                        height="0"
                        className="absolute"
                        aria-hidden="true"
                    >
                        <defs>
                            <filter id="unicorn-outline">
                                <feFlood
                                    floodColor="#6b7280"
                                    floodOpacity="0.35"
                                    result="color"
                                />
                                <feComposite
                                    operator="in"
                                    in="color"
                                    in2="SourceAlpha"
                                />
                            </filter>
                        </defs>
                    </svg>
                    <div className="flex items-center justify-center w-8 h-8">
                        <img
                            src="/unicorn.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="w-6 h-6 animate-pulse"
                            style={{ filter: 'url(#unicorn-outline)' }}
                            aria-hidden
                        />
                    </div>
                    <p className="text-fg-tertiary text-sm flex items-center gap-1">
                        <span className="inline-block w-5 h-4 rounded bg-[#6b7280]/35 animate-pulse" />{' '}
                        Boops
                    </p>
                </>
            ) : (
                <>
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
                    <p className="text-fg-tertiary text-sm ">
                        {totalBoops} Boops
                    </p>
                </>
            )}
            <div
                className="absolute -top-1/2 w-full h-full pointer-events-none"
                role="status"
                aria-live="polite"
            >
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
                </AnimatePresence>
            </div>
        </div>
    );
}
