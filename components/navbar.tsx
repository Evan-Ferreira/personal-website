'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-8 mb-4">
            <Link
                href="/"
                className={`text-fg-secondary hover:text-fg-tertiary transition-all ease-in-out duration-300 ${
                    pathname === '/' ? 'text-fg-primary' : ''
                }`}
            >
                Home
            </Link>
            <Link
                href="/blog"
                className={`text-fg-secondary hover:text-fg-tertiary transition-all ease-in-out duration-300 ${
                    pathname.includes('/projects') ? 'text-fg-primary' : ''
                }`}
            >
                Projects
            </Link>
            <Link
                href="/writing"
                className={`text-fg-secondary hover:text-fg-tertiary transition-all ease-in-out duration-300 ${
                    pathname.includes('/projects') ? 'text-fg-primary' : ''
                }`}
            >
                Writing
            </Link>
            <Link
                href="/life"
                className={`text-fg-secondary hover:text-fg-tertiary transition-all ease-in-out duration-300 ${
                    pathname.includes('/projects') ? 'text-fg-primary' : ''
                }`}
            >
                Life
            </Link>
        </div>
    );
}
