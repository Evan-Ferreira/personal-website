import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
// import { getPostFrontmatter } from '@/app/blog/posts';
export async function getPostFrontmatter(slug: string) {
    const mdxFile = await import(`@/app/blog/posts/${slug}.mdx`);
    const title = mdxFile.title;
    const subtitle = mdxFile.subtitle;
    const date = mdxFile.date;
    const visibility = mdxFile.visibility;
    console.log(title, subtitle, date, visibility);
    return { title, subtitle, date, visibility };
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
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
    params: Promise<{ slug: string }>;
}>) {
    const { slug } = await params;
    const { visibility } = await getPostFrontmatter(slug);
    console.log(visibility, 'here', slug);
    // Throw 404 if post doesn't exist or is not public
    if (visibility !== 'public') {
        notFound();
    }

    return (
        <main className="mt-8 flex items-center flex-col lg:px-8 px-4">
            {children}
        </main>
    );
}
