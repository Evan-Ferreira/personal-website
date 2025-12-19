import { Project } from '@/components/project';

const PROJECTS = [
    {
        name: 'Local Reach',
        description:
            'Local Reach uses AI to replace TV commercial breaks in restaurants & bars with more targeted ads.',
        technologies: ['TensorFlow', 'OpenCV', 'Raspberry Pi', 'Python'],
        link: 'https://www.thelocalreach.ca/',
        badges: ['ACQUIRED', 'COMPUTER VISION', 'MACHINE LEARNING'],
    },
    {
        name: 'Monkey Music',
        description:
            'Download every song from your Spotify playlist, offline and free.',
        technologies: ['Expo', 'React Native', 'Express', 'NodeJS'],
        link: 'https://github.com/Evan-Ferreira/monkey-music',
        badges: ['MOBILE APP', 'FULL STACK'],
    },
    {
        name: 'Stumble',
        description: 'Leetcode platform for dating.',
        technologies: ['NodeJS', 'ExpressJS', 'NextJS', 'MongoDB'],
        link: 'https://github.com/Evan-Ferreira/Stumble_HackTheHill2024',
        badges: ['WEB APP', 'FULL STACK'],
    },
];

export function Projects() {
    return (
        <section className="flex flex-col gap-3 lg:max-w-3/5">
            <h2 className="text-xs text-fg-tertiary lg:mt-6">PROJECTS</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                {PROJECTS.map(
                    (
                        { name, description, technologies, link, badges },
                        index
                    ) => (
                        <Project
                            key={index}
                            name={name}
                            description={description}
                            technologies={technologies}
                            link={link}
                            badges={badges}
                        />
                    )
                )}
            </div>
        </section>
    );
}
