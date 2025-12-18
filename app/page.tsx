import { Header } from '@/app/sections/header';
import { Experience as ExperienceSection } from '@/app/sections/experience';
import { Projects as ProjectsSection } from '@/app/sections/projects';

export default function Home() {
    return (
        <main className="min-h-screen font-mono">
            <Header />
            <div className="flex justify-center gap-6">
                <ExperienceSection />
                <ProjectsSection />
            </div>
        </main>
    );
}
