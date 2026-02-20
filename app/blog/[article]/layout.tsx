import type { Metadata } from 'next';
import { getPostFrontmatter } from '@/utils/posts';
import { notFound } from 'next/navigation';
import { Header } from '@/app/blog/[article]/header';
import { Footer } from '@/app/blog/footer';
import { ActionsBar } from '@/app/blog/[article]/actions-bar';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ article: string }>;
}): Promise<Metadata> {
    const { article } = await params;
    const { title, subtitle } = await getPostFrontmatter(article);

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
    params: Promise<{ article: string; book?: string }>;
}>) {
    const { article, book } = await params;
    const slug = book ? `books/${book}` : article;
    const { visibility, title, subtitle } = await getPostFrontmatter(slug);

    if (visibility === 'private' && process.env.NEXT_PUBLIC_ENV === 'prod') {
        notFound();
    }

    return (
        <article className="flex flex-col items-center gap-8 text-left px-4 lg:py-8 py-4 font-mono min-h-screen h-full max-w-2xl mx-auto">
            <Header title={title} subtitle={subtitle} />
            <ActionsBar slug={slug} />
            <section className="text-sm leading-relaxed -mt-10">
                {children}
            </section>
            <Footer />
        </article>
    );
}
