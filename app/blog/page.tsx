import { Header } from '@/app/blog/header';
import { Metadata } from 'next';
import { getAllPostsFrontmatter } from '@/utils/posts';
import { Post } from '@/app/blog/article';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.evanferreira.com'),
    title: 'Evan Ferreira - Writing',
    description: 'Software, philosophy, physics and everything in between',
};

export type MetadataProps = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Blog() {
    const posts = await getAllPostsFrontmatter();
    return (
        <main className="font-mono lg:mt-10 mt-8 flex items-center flex-col lg:px-8 px-4">
            <Header />
            <section className="flex flex-col gap-3 max-w-2xl w-full">
                <h2 className="text-xs text-fg-tertiary mt-6">WRITING</h2>
                {posts
                    ?.filter((post) => post.visibility === 'public')
                    .map((post) => (
                        <Post
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            subtitle={post.subtitle}
                            date={post.date}
                        />
                    ))}
            </section>
        </main>
    );
}
