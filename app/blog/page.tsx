import { Header } from '@/app/blog/header';
import { getAllPostsFrontmatter } from '@/utils/posts';
import { Post } from '@/app/blog/article';
import { Footer } from '@/app/blog/footer';

export default async function Blog() {
    const posts = await getAllPostsFrontmatter();
    return (
        <main className="font-mono flex items-center flex-col lg:py-8 py-4 px-4 h-full min-h-screen">
            <Header />
            <section className="flex flex-col gap-3 max-w-2xl w-full">
                <h2 className="text-xs text-fg-tertiary mt-6">WRITING</h2>
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
            </section>
            <Footer />
        </main>
    );
}
