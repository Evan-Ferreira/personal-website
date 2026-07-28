import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin',
    robots: { index: false, follow: false },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="flex flex-col gap-6">{children}</div>;
}
