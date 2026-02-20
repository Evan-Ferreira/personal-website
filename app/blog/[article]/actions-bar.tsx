'use client';

import { useBoops } from '@/app/hooks/use-boops';

const FILL_PER_CLICK = 20;

export function ActionsBar({
    boops: previousBoops,
    slug,
}: {
    boops: number;
    slug: string;
}) {
    const { userBoops, incrementBoops, totalBoops } = useBoops(
        slug,
        previousBoops,
    );

    return (
        <div className="flex items-center relative justify-between gap-4 w-full border-t border-b border-border py-2">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => incrementBoops()}
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
                className="mr-4 hover:cursor-pointer"
            >
                <img
                    className="opacity-40 invert hover:opacity-50 transition-opacity duration-200"
                    src="/chain.svg"
                    alt="Link"
                    width={16}
                    height={16}
                />
            </button>
            <div className="absolute w-full h-full -top-full"></div>
        </div>
    );
}
