'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
    const router = useRouter();
    const params = useSearchParams();
    const next = params.get('next') || '/admin';

    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ passcode }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || 'Login failed.');
                return;
            }
            router.replace(next.startsWith('/admin') ? next : '/admin');
            router.refresh();
        } catch {
            setError('Network error. Try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col gap-1">
                <h1 className="text-fg-primary text-lg">Admin</h1>
                <p className="text-fg-secondary">Enter your passcode to continue.</p>
            </div>
            <input
                type="password"
                inputMode="text"
                autoComplete="current-password"
                autoFocus
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode"
                className="rounded-md border border-border px-3 py-2 bg-bg-secondary text-fg-primary"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                disabled={submitting || !passcode}
                className="rounded-md border border-border px-3 py-2 text-fg-primary disabled:opacity-50"
            >
                {submitting ? 'Checking…' : 'Log in'}
            </button>
        </form>
    );
}

export default function AdminLoginPage() {
    return (
        <Suspense fallback={null}>
            <LoginForm />
        </Suspense>
    );
}
