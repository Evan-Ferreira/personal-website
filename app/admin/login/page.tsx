'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AdminLoginPage() {
    const router = useRouter();
    const params = useSearchParams();
    const next = params.get('next') || '/admin';

    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ passcode }),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data?.error || 'Login failed.');
                return;
            }
            router.replace(next.startsWith('/admin') ? next : '/admin');
            router.refresh();
        } catch {
            setError('Network error. Try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Suspense fallback={null}>
            <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4 max-w-sm mx-auto"
            >
                <p className="text-fg-secondary">
                    {'Enter your passcode to continue.'}
                </p>
                <input
                    type="password"
                    inputMode="text"
                    autoComplete="current-password"
                    autoFocus
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Passcode"
                    className="rounded-md border px-3 py-2 bg-bg-secondary text-fg-primary"
                />
                <button
                    type="submit"
                    disabled={isLoading || !passcode}
                    className="px-3 py-2 text-fg-secondary disabled:opacity-50 hover:text-fg-primary active:text-fg-primary transition-all ease-in-out duration-150"
                >
                    {isLoading ? 'Loading...' : 'Log in'}
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </Suspense>
    );
}
