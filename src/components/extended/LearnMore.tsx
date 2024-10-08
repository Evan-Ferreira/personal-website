import { PageContext } from '../../App';
import { useContext } from 'react';
import red_right_arrow from '../../assets/images/extended/red_right_arrow.png';

const LearnMore = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { setPage } = context;
    return (
        <div
            onClick={() => setPage('/passions')}
            className="flex flex-row justify-start items-center space-x-4 animate-pulse hover:animate-none hover:cursor-pointer"
        >
            <p className="font-SourceSerif4ExtraLight md:text-3xl text-xl">
                Learn More
            </p>
            <img className="md:w-6 w-3" src={red_right_arrow} alt="Red Arrow" />
        </div>
    );
};

export default LearnMore;
