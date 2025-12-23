import Image from 'next/image';
import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    style: 'italic',
    variable: '--font-instrument-serif',
});

export function Header() {
    return (
        <header className="flex flex-col w-fit bento-card items-center justify-center mx-auto gap-2">
            <h1
                className={`${instrumentSerif.className} text-4xl text-fg-primary leading-none tracking-wider transition-all duration-300`}
            >
                Evan's Blog
            </h1>
            <div className="flex text-xs gap-1">
                <p>Software, philosophy, physics and everything in between</p>
            </div>
        </header>
    );
}
