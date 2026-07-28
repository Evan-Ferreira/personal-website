import Link from 'next/link';
import { LogoutButton } from './logout-button';

export default function AdminPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-fg-primary text-lg">Admin</h1>
                <LogoutButton />
            </div>
            <nav className="flex flex-col gap-2">
                <Link
                    href="/admin/photos"
                    className="rounded-md border border-border px-3 py-2 text-fg-primary"
                >
                    Add a /life photo →
                </Link>
            </nav>
        </div>
    );
}
