import React from 'react';

const ExploreProjects = () => {
    return (
        <a href="">
            <div className="flex flex-row justify-start items-center space-x-4 mt-10 animate-pulse hover:animate-none">
                <p className="font-SourceSerif4ExtraLight text-3xl">
                    Explore my Projects
                </p>
                <img
                    className="w-6"
                    src="blue_right_arrow.png"
                    alt="Blue Arrow"
                />
            </div>
        </a>
    );
};

export default ExploreProjects;
