import type { Metadata, ResolvingMetadata } from 'next';
import { getPostFrontmatter } from '@/utils/posts';
import { notFound } from 'next/navigation';
import { ActionsBar } from '@/app/writing/[article]/actions-bar';
import { instrumentSerif } from '@/app/page';

type Props = {
    params: Promise<{ article: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { article } = await params;
    const { title, subtitle } = await getPostFrontmatter(article);
    return {
        title: `${title} | Evan Ferreira`,
        description: subtitle,
        openGraph: {
            url: `/writing/${article}`,
            type: 'article',
        },
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
        <article className="flex flex-col min-h-screen h-full mx-auto">
            <header className="flex flex-col gap-1 w-full mt-2">
                <h1
                    className={`${instrumentSerif.className} text-4xl text-fg-primary leading-none tracking-wider transition-all duration-300`}
                >
                    {title}
                </h1>
                <div className="flex justify-between w-full items-center">
                    <h3 className="text-fg-secondary">{subtitle}</h3>
                    <ActionsBar slug={slug} />
                </div>
            </header>
            <section>{children}</section>
        </article>
    );
}
