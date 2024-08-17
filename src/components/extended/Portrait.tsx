import { useState } from 'react';
import mayor_win from '../../assets/images/extended/mayor_win.jpg';

const Portrait = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex flex-col md:w-6/12 w-8/12 justify-center items-center font-SourceSerif4ExtraLight space-y-2 hover:opacity-70 ${
                hover ? 'scale-105' : 'scale-100'
            } ${
                hover ? 'opacity-70' : 'opacity-100'
            } transition ease-in-out duration-300`}
            href="https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations"
        >
            <div className="flex flex-row justify-end bg-gray-100 overflow-hidden rounded-lg border-8 border-gray-100 md:w-8/12">
                <img
                    className="inline-block rounded-lg w-full"
                    src={mayor_win}
                    alt="Mayor's Innovation Challenge Win"
                />
            </div>
            <p className="text-md italic w-8/12 hidden md:flex w-full text-center">
                Featured in the Queen's Gazette for Winning $5,000 from the
                Mayor of Kingston (Click to Learn More)
            </p>
        </a>
    );
};

export default Portrait;
