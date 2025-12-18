import { Header } from '@/app/header';
import { Experience as ExperienceSection } from './sections/experience';

export default function Home() {
    return (
        <main className="min-h-screen font-mono">
            <Header />
            <div className="flex gap-6">
                <ExperienceSection />
                <section className="flex flex-col">
                    <h2 className="text-xs text-fg-tertiary my-6">PROJECTS</h2>
                </section>
            </div>
        </main>
    );
}
