import React from 'react';

const Portrait = () => {
    return (
        <a
            className="flex flex-col w-6/12 justify-center items-center font-SourceSerif4ExtraLight space-y-2 hover:opacity-70"
            href="https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations"
        >
            <div className="flex flex-row justify-end bg-gray-100 overflow-hidden rounded-lg border-8 border-gray-100 w-8/12">
                <img
                    className="inline-block rounded-lg w-full"
                    src="mayor_win.jpg"
                    alt="Mayor's Innovation Challenge Win"
                />
            </div>
            <p className="text-md italic w-8/12 text-center">
                Featured in the Queen's Gazette for Winning $5,000 from the
                Mayor of Kingston (Click to Learn More)
            </p>
        </a>
    );
};

export default Portrait;
