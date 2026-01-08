export default async function Article({
    params,
}: {
    params: Promise<{ article: string; book: string }>;
}) {
    const { book } = await params;
    // Import the MDX file - frontmatter becomes named exports, content is default export
    const PostModule = await import(`@/app/blog/posts/books/${book}.mdx`);

    const Post = PostModule.default;

    // Frontmatter fields (title, subtitle, date, visibility) are available as named exports
    // but we only render the content component
    return <Post />;
}

export function generateStaticParams() {
    return [{ article: 'my-bookshelf', book: 'the-design-of-everyday-things' }];
}

export const dynamicParams = false;
