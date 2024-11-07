import LocalReach from './LocalReach';
import QHacks from './QHacks';
import HawkHacks from './HawkHacks';
import MonkeyMusic from './MonkeyMusic';
import LeetBros from './LeetBros';
import Stumble from './Stumble';

const TechnologyGallery = () => {
    return (
        <div className="grid grid-col-1 grid-row-3 justify-items-center gap-y-6 md:mt-20 mt-10 pb-20">
            <Stumble></Stumble>
            <MonkeyMusic></MonkeyMusic>
            <LocalReach></LocalReach>
            <LeetBros></LeetBros>
            <HawkHacks></HawkHacks>
            <QHacks></QHacks>
        </div>
    );
};

export default TechnologyGallery;
