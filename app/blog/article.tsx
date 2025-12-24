import { Badge } from '@/components/badge';
import Link from 'next/link';

export function Post({
    title,
    slug,
    subtitle,
    date,
    badges,
}: {
    title: string;
    slug: string;
    subtitle: string;
    date: string;
    badges?: string[];
}) {
    return (
        <Link
            href={`/blog/${slug}`}
            className="flex flex-col bento-card h-19 justify-center gap-2 w-full"
        >
            <div className="flex items-center justify-between">
                <p className="text-xs">{title}</p>
                <p className="text-fg-tertiary text-[8px] uppercase">{date}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="lg:text-xs text-fg-tertiary text-[10px]">
                    {subtitle}
                </p>
                <div className="flex gap-2">
                    {badges?.map((badge, index) => (
                        <Badge key={index} color="orange" className="uppercase">
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>
        </Link>
    );
}
