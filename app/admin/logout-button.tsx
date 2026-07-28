'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LogoutButton() {
    const router = useRouter();
    const [busy, setBusy] = useState(false);

    async function logout() {
        setBusy(true);
        await fetch('/api/admin/login', { method: 'DELETE' });
        router.replace('/admin/login');
        router.refresh();
    }

    return (
        <button
            onClick={logout}
            disabled={busy}
            className="text-fg-secondary disabled:opacity-50"
        >
            {busy ? '…' : 'Log out'}
        </button>
    );
}
