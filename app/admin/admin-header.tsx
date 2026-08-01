'use client';

import { usePathname } from 'next/navigation';
import { LogoutButton } from './logout-button';
import Link from 'next/link';

export function AdminHeader() {
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center">
            <h1 className="text-fg-primary mb-1">Admin</h1>
            {(() => {
                switch (pathname) {
                    case '/admin/photos':
                        return (
                            <Link href="/admin" className="text-fg-secondary">
                                ← Admin
                            </Link>
                        );
                    case '/admin':
                        return <LogoutButton />;
                    default:
                        return null;
                }
            })()}
        </div>
    );
}
