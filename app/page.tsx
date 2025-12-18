import { Header } from '@/app/sections/header';
import { Experience as ExperienceSection } from '@/app/sections/experience';
import { Projects as ProjectsSection } from '@/app/sections/projects';
import { Footer } from '@/app/sections/footer';

export default function Home() {
    return (
        <main className="font-mono lg:mt-16 mt-8 lg:max-w-7xl mx-auto flex flex-1 flex-col lg:px-8 px-4">
            <Header />
            <div className="flex lg:flex-row flex-col justify-center gap-6">
                <ExperienceSection />
                <ProjectsSection />
            </div>
            <Footer />
        </main>
    );
}
