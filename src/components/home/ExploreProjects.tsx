import { PageContext } from '../../App';
import { useContext } from 'react';
import blue_right_arrow from '../../assets/images/home/blue_right_arrow.png';

const ExploreProjects = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { setPage } = context;
    return (
        <div
            onClick={() => setPage('/technology')}
            className="flex flex-row justify-start items-center space-x-4 mt-10 animate-pulse hover:animate-none hover:cursor-pointer"
        >
            <p className="font-SourceSerif4ExtraLight md:text-3xl text-xl">
                Explore my Projects
            </p>
            <img
                className="md:w-6 w-3"
                src={blue_right_arrow}
                alt="Blue Arrow"
            />
        </div>
    );
};

export default ExploreProjects;
