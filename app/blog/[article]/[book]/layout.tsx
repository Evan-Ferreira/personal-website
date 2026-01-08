import type { Metadata } from 'next';
import { getPostFrontmatter } from '@/utils/posts';
import { notFound } from 'next/navigation';
import { Instrument_Serif } from 'next/font/google';
import { Header } from '@/app/blog/[article]/header';
import { Footer } from '@/app/blog/footer';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ book: string }>;
}): Promise<Metadata> {
    const { book } = await params;
    const slug = 'books/' + book;
    const { title, subtitle } = await getPostFrontmatter(slug);

    return {
        title: `${title} | Evan Ferreira`,
        description: subtitle,
    };
}

export default async function Layout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ book: string }>;
}>) {
    const { book } = await params;

    const slug = 'books/' + book;
    const { visibility, title, subtitle } = await getPostFrontmatter(slug);

    // Throw 404 if post doesn't exist or is not public
    if (visibility !== 'public') {
        notFound();
    }

    return <>{children}</>;
}
