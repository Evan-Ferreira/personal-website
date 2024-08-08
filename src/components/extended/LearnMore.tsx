import React from 'react';

const LearnMore = () => {
    return (
        <a href="">
            <div className="flex flex-row justify-start items-center space-x-4 animate-pulse hover:animate-none">
                <p className="font-SourceSerif4ExtraLight text-3xl">
                    Learn More
                </p>
                <img
                    className="w-6"
                    src="red_right_arrow.png"
                    alt="Blue Arrow"
                />
            </div>
        </a>
    );
};

export default LearnMore;
