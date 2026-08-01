import type { Metadata } from 'next';
import { AdminHeader } from './admin-header';

export const metadata: Metadata = {
    title: {
        template: '%s | Admin',
        default: 'Admin',
    },
    robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col relative">
            <AdminHeader />
            {children}
        </div>
    );
}
