'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LogoutButton() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    async function logout() {
        setIsLoading(true);
        await fetch('/api/admin/login', { method: 'DELETE' });
        router.replace('/admin/login');
        router.refresh();
    }

    return (
        <button
            onClick={logout}
            disabled={isLoading}
            className="text-fg-secondary disabled:opacity-50 absolute top-0 right-0"
        >
            {isLoading ? '…' : 'Log out'}
        </button>
    );
}
