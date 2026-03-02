import { Metadata, ResolvingMetadata } from 'next';
import { getPostFrontmatter } from '@/utils/posts';

type Props = {
    params: Promise<{ article: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const { article } = await params;
    const { title, subtitle } = await getPostFrontmatter(article);
    return {
        title: `${title} | Evan Ferreira`,
        description: subtitle,
        openGraph: {
            url: `/blog/${article}`,
            type: 'article',
        },
    };
}
export default async function Article({
    params,
}: {
    params: Promise<{ article: string }>;
}) {
    const { article } = await params;
    // Import the MDX file - frontmatter becomes named exports, content is default export
    const PostModule = await import(`@/app/blog/posts/${article}.mdx`);

    const Post = PostModule.default;

    // Frontmatter fields (title, subtitle, date, visibility) are available as named exports
    // but we only render the content component
    return <Post />;
}

export function generateStaticParams() {
    return [
        { article: 'my-bookshelf' },
        { article: 'how-to-write-cold-emails' },
    ];
}

export const dynamicParams = false;
