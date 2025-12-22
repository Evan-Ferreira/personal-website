'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    if (process.env.NEXT_PUBLIC_ENV !== 'dev') return null;

    return (
        <div
            className="text-fg-primary font-mono text-xs flex items-center bottom-16 left-1/2 -translate-x-1/2 \
        bento-navbar w-fit py-3 px-4"
        >
            <Link
                href="/"
                className={`mx-3 px-1 w-fit hover:text-fg-tertiary transition-all ease-in-out duration-300 ${
                    pathname === '/' ? 'nav-link-active' : ''
                }`}
            >
                HOME
            </Link>
            <Link
                href="/blog"
                className={`mx-3 px-1 text-xs hover:text-fg-tertiary transition-all ease-in-out duration-300 ${
                    pathname === '/blog' ? 'nav-link-active' : ''
                }`}
            >
                BLOG
            </Link>
        </div>
    );
}
