import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExploreProjects = () => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate('/technology')}
            className="flex flex-row justify-start items-center space-x-4 mt-10 animate-pulse hover:animate-none hover:cursor-pointer"
        >
            <p className="font-SourceSerif4ExtraLight text-3xl">
                Explore my Projects
            </p>
            <img className="w-6" src="blue_right_arrow.png" alt="Blue Arrow" />
        </div>
    );
};

export default ExploreProjects;
