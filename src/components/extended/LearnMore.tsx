import { PageContext } from '../navbar/Navbar';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
    return (
        <div className="flex flex-row justify-start items-center space-x-4 animate-pulse hover:animate-none hover:cusor-pointer">
            <p className="font-SourceSerif4ExtraLight text-3xl">Learn More</p>
            <img className="w-6" src="red_right_arrow.png" alt="Blue Arrow" />
        </div>
    );
};

export default LearnMore;
