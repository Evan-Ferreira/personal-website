'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-8 lg:mb-6 mb-4">
            <Link
                href="/"
                className={`${pathname === '/' ? 'text-fg-primary' : 'text-fg-secondary'} hover:text-fg-tertiary transition-all ease-in-out duration-150`}
            >
                Home
            </Link>
            <Link
                href="/projects"
                className={`${pathname.includes('/projects') ? 'text-fg-primary' : 'text-fg-secondary'} hover:text-fg-tertiary transition-all ease-in-out duration-150`}
            >
                Projects
            </Link>
            <Link
                href="/writing"
                className={`${pathname.includes('/writing') ? 'text-fg-primary' : 'text-fg-secondary'} hover:text-fg-tertiary transition-all ease-in-out duration-150`}
            >
                Writing
            </Link>
            <Link
                href="/life"
                className={`${pathname.includes('/life') ? 'text-fg-primary' : 'text-fg-secondary'} hover:text-fg-tertiary transition-all ease-in-out duration-150`}
            >
                Life
            </Link>
        </div>
    );
}
