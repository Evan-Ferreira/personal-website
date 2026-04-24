import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/navbar';
import QueryProvider from '@/app/providers/query';
import VisitorProvider from '@/app/providers/visitor';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from '@/app/sections/footer';

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
                className={`${GeistSans.className} text-fg-primary text-base font-light lg:px-96 px-3 lg:py-16 py-4 gap-4 min-h-screen flex flex-col`}
            >
                <Navbar />
                <QueryProvider>
                    <VisitorProvider>{children}</VisitorProvider>
                </QueryProvider>
                <Footer />
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
