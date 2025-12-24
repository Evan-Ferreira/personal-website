import { Header } from '@/app/blog/header';
import { Badge } from '@/components/badge';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.evanferreira.com'),
    title: 'Evan Ferreira - Writing',
    description: 'Software, philosophy, physics and everything in between',
};

export type MetadataProps = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function Blog() {
    return (
        <main className="font-mono lg:mt-10 mt-8 flex items-center flex-col lg:px-8 px-4">
            <Header />
            <section className="flex flex-col gap-3 max-w-2xl w-full">
                <h2 className="text-xs text-fg-tertiary mt-6">WRITING</h2>

                <div className="flex flex-col bento-card h-19 justify-center gap-2 w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-xs">Don't be a Shitter</p>
                        <p className="text-fg-tertiary text-[8px] uppercase">
                            Shitter.com
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="lg:text-xs text-fg-tertiary text-[10px]">
                            The story of super duck of us
                        </p>
                        <div className="flex gap-2">
                            <Badge key={0} color="orange" className="uppercase">
                                Startups
                            </Badge>
                            <Badge key={1} color="orange" className="uppercase">
                                Startups
                            </Badge>
                            <Badge key={2} color="orange" className="uppercase">
                                Startups
                            </Badge>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bento-card h-19 justify-center gap-2 w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-xs">Don't be a Shitter</p>
                        <p className="text-fg-tertiary text-[8px] uppercase">
                            Shitter.com
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="lg:text-xs text-fg-tertiary text-[10px]">
                            The story of super duck of us
                        </p>
                        <div className="flex gap-2">
                            <Badge key={0} color="orange" className="uppercase">
                                Startups
                            </Badge>
                            <Badge key={1} color="orange" className="uppercase">
                                Startups
                            </Badge>
                            <Badge key={2} color="orange" className="uppercase">
                                Startups
                            </Badge>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
