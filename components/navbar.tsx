'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    return (
        <div
            className="fixed! text-fg-primary font-mono text-xs flex items-center bottom-16 left-1/2 -translate-x-1/2 \
        bento-card w-fit bg-u-950! py-3!"
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
