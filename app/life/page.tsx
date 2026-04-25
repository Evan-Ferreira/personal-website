import { Memory as MemoryComponent } from '@/components/memory';
import type { ImageInfo } from '@/components/project';

type Memory = {
    date: string;
    description: string;
    imageInfo: ImageInfo;
};

const memories: Memory[] = [];

function LifePage() {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
            {memories.length > 0 ? (
                memories.map((m, i) => (
                    <MemoryComponent
                        key={i}
                        description={m.description}
                        date={m.date}
                        imageInfo={m.imageInfo}
                    />
                ))
            ) : (
                <p className="text-fg-secondary">Coming soon...</p>
            )}
        </div>
    );
}

export default LifePage;
