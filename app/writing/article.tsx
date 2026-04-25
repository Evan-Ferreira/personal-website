import Link from 'next/link';

export function Post({
    title,
    slug,
    subtitle,
    date,
}: {
    title: string;
    slug: string;
    subtitle: string;
    date: string;
}) {
    return (
        <Link
            href={`/writing/${slug}`}
            className="flex flex-col h-19 justify-center gap-1 w-full"
        >
            <div className="flex items-center justify-between">
                <h2>{title}</h2>
                <p className="text-fg-tertiary">{date}</p>
            </div>
            <p className="text-fg-secondary">{subtitle}</p>
        </Link>
    );
}
