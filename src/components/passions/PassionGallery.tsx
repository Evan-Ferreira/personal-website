import LocalReach from './LocalReach';
import Mayors from './Mayors';
import Wrestling from './Wrestling';

const PassionGallery = () => {
    return (
        <div className="grid grid-col-1 grid-row-3 justify-items-center gap-y-6 md:mt-20 mt-10 pb-20">
            <LocalReach></LocalReach>
            <Mayors></Mayors>
            <Wrestling></Wrestling>
        </div>
    );
};

export default PassionGallery;
