import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/navbar';
import QueryProvider from '@/app/providers/query';
import VisitorProvider from '@/app/providers/visitor';

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: 'Evan Ferreira',
        template: '%s | Evan Ferreira',
    },
    description:
        'Business student passionate about software, startups, and side quests.',
    metadataBase: new URL('https://www.evanferreira.com'),
    openGraph: {
        url: 'https://www.evanferreira.com',
        siteName: 'Evan Ferreira',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@evanjfer',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`bg-grid ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
            >
                <QueryProvider>
                    <VisitorProvider>{children}</VisitorProvider>
                </QueryProvider>
                <Navbar />
                <Analytics />
            </body>
        </html>
    );
}
