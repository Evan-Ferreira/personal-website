import { Experience as ExperienceSection } from '@/app/sections/experience';
import { Projects as ProjectsSection } from '@/app/sections/projects';
import { Footer } from '@/app/sections/footer';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    style: 'italic',
    variable: '--font-instrument-serif',
});

export default async function Home() {
    return (
        <main className="flex flex-col gap-4 w-full">
            <div className="flex flex-col mb-2">
                <h1 className={`${instrumentSerif.className} italic text-5xl`}>
                    Evan Ferreira
                </h1>
                <p className="text-fg-tertiary">📍 San Francisco, CA</p>
            </div>
            <p>
                I’m a 4th year Business student at Queen’s University,
                interested in agents, full stack engineering, and design.
            </p>
            <p>
                Currently, I’m building JAJA and agents as a software
                engineering intern at Uber.
            </p>
            <p>
                Previously I co-founded and sold a startup, led an engineering
                team at Taiv (YC W20), launched payment methods at Shopify, and
                was a nationally-ranked freestyle wrestler.
            </p>
            <p>
                Today, I’m focusing on trying to balance my ambitions with being
                more spontaneous and appreciative for this gift we have called
                life.
            </p>
            <p>Some interesting things I’ve worked on:</p>
            <ul className="list-disc ml-4">
                <li>JAJA (in progress)</li>
                <li>Local Reach (acquired)</li>
                <li>inQUbate</li>
                <li>Stumble</li>
            </ul>
            <Footer />
        </main>
    );
}
