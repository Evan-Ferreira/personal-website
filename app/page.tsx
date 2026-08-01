import { Instrument_Serif } from 'next/font/google';

export const instrumentSerif = Instrument_Serif({
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
                Currently, I’m building a venture studio with my{' '}
                <a
                    href="https://www.josephliao.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-secondary hover:text-fg-primary active:text-fg-primary transition-all ease-in-out duration-150 underline"
                >
                    best friend
                </a>
                , sponsored by the{' '}
                <a
                    href="https://cansbridgefellowship.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-secondary hover:text-fg-primary active:text-fg-primary transition-all ease-in-out duration-150 underline"
                >
                    Cansbridge Fellowship
                </a>
                .
            </p>
            <p>
                Previously I co-founded and{' '}
                <a
                    href="https://betakit.com/taiv-acquihires-fellow-canadian-adtech-startup-local-reach-to-aid-expansion-plans/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-secondary hover:text-fg-primary active:text-fg-primary transition-all ease-in-out duration-150 underline"
                >
                    sold a startup
                </a>
                , led an engineering team at Taiv (YC W20), interned at Uber and
                Shopify, and was a nationally-ranked freestyle wrestler.
            </p>
            <p>
                Today, I’m focusing on trying to balance my ambitions with being
                more spontaneous and appreciative for the life I get to live.
            </p>
            <p>Some interesting things I’ve worked on:</p>
            <ul className="list-disc ml-4">
                <li>JAJA Labs(in progress)</li>
                <li>Local Reach (acquired)</li>
                <li>inQUbate</li>
                <li>Stumble</li>
            </ul>
        </main>
    );
}
