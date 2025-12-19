import { Badge } from '@/components/badge';
import { TechBadge } from '@/components/tech-badge';

export function Project({
    badges,
    technologies,
    name,
    description,
    link,
}: {
    badges: string[];
    technologies: string[];
    name: string;
    description: string;
    link: string;
}) {
    return (
        <a
            href={link}
            className="bento-card flex flex-col gap-2 relative group h-41"
        >
            <p className="text-xs min-w-64">{name}</p>
            <p
                className="text-xs text-fg-tertiary absolute right-[16px] top-[16px] 
                    group-hover:text-accent duration-300 transition-all ease-in-out"
            >
                →
            </p>
            <div className="flex gap-2">
                {badges.map((badge) => (
                    <Badge key={badge} color="orange" className="uppercase">
                        {badge}
                    </Badge>
                ))}
            </div>
            <p className="text-fg-tertiary lg:text-xs min-h-12 text-[10px]">
                {description}
            </p>
            <div className="flex gap-1">
                {technologies.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                ))}
            </div>
        </a>
    );
}
