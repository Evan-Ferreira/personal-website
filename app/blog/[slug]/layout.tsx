import type { Metadata } from 'next';
import { getPostFrontmatter } from '@/utils/posts';
import { notFound } from 'next/navigation';
import { Instrument_Serif } from 'next/font/google';
import { Header } from '@/app/blog/[slug]/header';
import { Footer } from '@/app/blog/footer';

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

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    style: 'italic',
    variable: '--font-instrument-serif',
});

export default async function Layout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}>) {
    const { slug } = await params;
    const { visibility, title, subtitle } = await getPostFrontmatter(slug);

    // Throw 404 if post doesn't exist or is not public
    if (visibility !== 'public') {
        notFound();
    }

    return (
        <article className="flex flex-col items-center text-left px-4 py-8 font-mono gap-12 min-h-screen h-full">
            <Header title={title} subtitle={subtitle} />
            <section className="max-w-2xl text-sm leading-relaxed">
                {children}
            </section>
            <Footer />
        </article>
    );
}
