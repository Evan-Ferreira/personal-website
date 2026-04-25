import { Project } from '@/components/project';

const projects = [
    {
        title: 'JAJA',
        description: '[IN PROGRESS] AI agents for university',
        date: '2026',
        imageInfo: {
            src: '/jaja.png',
            alt: 'JAJA',
        },
        githubLink: 'https://github.com/Evan-Ferreira/jaja',
    },
    {
        title: 'Local Reach (Acquired)',
        description:
            'AI for restaurants & bars, replacing TV commercials with more targeted ads.',
        date: '2024',
        imageInfo: {
            src: '/localreach.png',
            alt: 'Local Reach',
        },
        otherLink:
            'https://betakit.com/taiv-acquihires-fellow-canadian-adtech-startup-local-reach-to-aid-expansion-plans/',
    },
    {
        title: 'Stumble',
        description: 'Leetcode platform for dating.',
        date: '2024',
        imageInfo: {
            src: '/stumble.png',
            alt: 'Stumble',
        },
        githubLink: 'https://github.com/Evan-Ferreira/Stumble_HackTheHill2024',
    },
];

function ProjectsPage() {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
            {projects.map((p, i) => (
                <Project
                    key={i}
                    title={p.title}
                    description={p.description}
                    date={p.date}
                    imageInfo={p.imageInfo}
                    otherLink={p.otherLink}
                    githubLink={p.githubLink}
                />
            ))}
        </div>
    );
}

export default ProjectsPage;
