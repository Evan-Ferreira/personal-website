import { Photo } from '@/components/memory';
import { photos } from '@/app/life/photos.generated';

// Eager-load the top row (2 cells on desktop); everything else lazy-loads on scroll.
const EAGER_COUNT = 2;

function LifePage() {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
            {photos.length > 0 ? (
                photos.map((photo, i) => (
                    <Photo
                        key={photo.base}
                        photo={photo}
                        eager={i < EAGER_COUNT}
                    />
                ))
            ) : (
                <p className="text-fg-secondary">Coming soon...</p>
            )}
        </div>
    );
}

export default LifePage;
