import type { Metadata } from 'next';
import { getPostFrontmatter } from '@/utils/posts';
import { notFound } from 'next/navigation';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ book: string }>;
}): Promise<Metadata> {
    const { book } = await params;
    const { title, subtitle } = await getPostFrontmatter('books' + '/' + book);

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
    const { visibility } = await getPostFrontmatter('books' + '/' + book);

    // Throw 404 if post doesn't exist or is not public
    if (visibility !== 'public') {
        notFound();
    }

    return <>{children}</>;
}
