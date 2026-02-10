import { readdir } from 'fs/promises';
import { join } from 'path';

export async function getPostFrontmatter(slug: string) {
    const mdxFile = await import(`@/app/blog/posts/${slug}.mdx`);

    const frontmatter = mdxFile.frontmatter || {};
    const title = frontmatter.title;
    const subtitle = frontmatter.subtitle;
    const date = frontmatter.date;
    const visibility = frontmatter.visibility;

    return { title, subtitle, date, visibility };
}

export async function getAllPostsFrontmatter() {
    const postsDirectory = join(process.cwd(), 'app/blog/posts');
    const files = await readdir(postsDirectory);

    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const posts = await Promise.all(
        mdxFiles.map(async (file) => {
            const slug = file.replace(/\.mdx$/, '');
            const frontmatter = await getPostFrontmatter(slug);
            return {
                slug,
                ...frontmatter,
            };
        }),
    );

    return posts;
}
