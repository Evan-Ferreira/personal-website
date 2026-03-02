import { Header } from '@/app/sections/header';
import { Experience as ExperienceSection } from '@/app/sections/experience';
import { Projects as ProjectsSection } from '@/app/sections/projects';
import { Footer } from '@/app/sections/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: 'Evan Ferreira',
        template: '%s | Evan Ferreira',
    },
    description:
        'Business student passionate about software, startups, and side quests.',
    metadataBase: new URL('https://www.evanferreira.com'),
    openGraph: {
        url: 'https://www.evanferreira.com',
        siteName: 'Evan Ferreira',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@evanjfer',
    },
};

export default async function Home() {
    return (
        <main className="font-mono lg:py-8 py-4 lg:max-w-7xl mx-auto flex flex-1 flex-col lg:px-8 px-4">
            <Header />
            <div className="flex lg:flex-row flex-col justify-center gap-6">
                <ExperienceSection />
                <ProjectsSection />
            </div>
            <Footer />
        </main>
    );
}
