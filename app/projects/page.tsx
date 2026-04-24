import { Project } from '@/components/project';

const projects = [
    {
        title: 'Local Reach',
        description: 'AI Startup, acquired by Taiv (YC W20)',
        date: '2026',
        imageInfo: {
            src: '/pillexa.jpeg',
            alt: 'Local Reach',
        },
        otherLink: 'github',
    },
    {
        title: 'Local Reach',
        description: 'AI Startup, acquired by Taiv (YC W20)',
        date: '2026',
        imageInfo: {
            src: '/pillexa.jpeg',
            alt: 'Local Reach',
        },
        otherLink: 'github',
    },
    {
        title: 'Local Reach',
        description: 'AI Startup, acquired by Taiv (YC W20)',
        date: '2026',
        imageInfo: {
            src: '/localreach.jpeg',
            alt: 'Local Reach',
        },
        otherLink: 'github',
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
                />
            ))}
        </div>
    );
}

export default ProjectsPage;
