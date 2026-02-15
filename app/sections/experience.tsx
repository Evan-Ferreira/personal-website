import Image from 'next/image';
import { Experience as ExperienceComponent } from '@/components/experience';

const EXPERIENCES = [
    {
        title: 'Software Engineer',
        description: 'Summer 2026, Team TBD',
        image: <Image width={40} height={40} src="/uber.svg" alt="Uber Logo" />,
        date: 'INCOMING SUMMER 2026',
        location: 'SAN FRANCISCO, CA',
    },
    {
        title: 'Software Engineer',
        description: 'Payments / Local Payment Methods',
        image: (
            <Image
                width={40}
                height={40}
                src="/shopify.svg"
                alt="Shopify Logo"
            />
        ),
        date: 'SEPT 2025 - DEC 2025',
        location: 'TORONTO, ON',
    },
    {
        title: 'Software Engineer',
        description: 'YC (W20), AI Enablement Team Lead',
        image: <Image width={40} height={45} src="/taiv.png" alt="Taiv Logo" />,
        date: 'JAN 2025 - AUG 2025',
        location: 'WINNIPEG, MB',
    },
    {
        title: 'Software Engineer',
        description: 'RxSkin, Prepare Medical, Core',
        image: (
            <Image
                width={40}
                height={40}
                src="/pillexa.jpeg"
                alt="Pillexa Logo"
            />
        ),
        date: 'JAN 2025 - AUG 2025',
        location: 'REMOTE',
    },
    {
        title: 'Co-Founder',
        description: 'Acquired by Taiv (YC W20)',
        image: (
            <Image
                width={40}
                height={40}
                src="/localreach.jpeg"
                alt="Local Reach Logo"
            />
        ),
        date: 'MAY 2024 - DEC 2024',
        location: 'KINGSTON, ON',
    },
];

export function Experience() {
    return (
        <section className="flex lg:w-2/5 w-full flex-col gap-3">
            <h2 className="text-xs text-fg-tertiary mt-6">EXPERIENCE</h2>
            {EXPERIENCES.map(
                ({ title, description, image, date, location }, index) => (
                    <ExperienceComponent
                        key={index}
                        title={title}
                        description={description}
                        image={image}
                        date={date}
                        location={location}
                    />
                ),
            )}
        </section>
    );
}
