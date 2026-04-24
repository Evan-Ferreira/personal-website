import { Memory } from '@/components/memory';

const memories = [
    {
        date: 'February 14, 2026',
        description: 'The time I yeeted Joseph',
        imageInfo: {
            src: '/localreach.jpeg',
            alt: 'yeet',
        },
    },
    {
        date: 'February 14, 2026',
        description: 'The time I yeeted Joseph',
        imageInfo: {
            src: '/localreach.jpeg',
            alt: 'yeet',
        },
    },
    {
        date: 'February 14, 2026',
        description: 'The time I yeeted Joseph',
        imageInfo: {
            src: '/localreach.jpeg',
            alt: 'yeet',
        },
    },
    {
        date: 'February 14, 2026',
        description: 'The time I yeeted Joseph',
        imageInfo: {
            src: '/localreach.jpeg',
            alt: 'yeet',
        },
    },
];

function LifePage() {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
            {memories.map((m, i) => (
                <Memory
                    key={i}
                    description={m.description}
                    date={m.date}
                    imageInfo={m.imageInfo}
                />
            ))}
        </div>
    );
}

export default LifePage;
