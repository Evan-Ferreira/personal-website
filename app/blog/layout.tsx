import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Evan Ferreira | Blog',
    description: 'Software, passions, and other random thoughts.',
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
