import { getAllPostsFrontmatter } from '@/utils/posts';
import { Post } from '@/app/writing/article';

export default async function Writing() {
    const posts = await getAllPostsFrontmatter();
    return (
        <main className="flex items-center flex-col h-full min-h-screen">
            {posts
                ?.filter((post) => {
                    if (
                        process.env.NEXT_PUBLIC_ENV !== 'prod' ||
                        post.visibility === 'public'
                    ) {
                        return true;
                    }
                    return false;
                })
                .sort((a, b) => a.priority - b.priority)
                .map((post) => (
                    <Post
                        key={post.slug}
                        slug={post.slug}
                        title={post.title}
                        subtitle={post.subtitle}
                        date={post.date}
                    />
                ))}
        </main>
    );
}
