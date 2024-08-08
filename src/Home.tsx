import React from 'react';
import Heading from './components/home/Heading';
import Socials from './components/home/Socials';
import PersonalDescription from './components/home/PersonalDescription';
import ExploreProjects from './components/home/ExploreProjects';

const Home = () => {
    return (
        <div className="flex flex-row w-screen h-screen bg-yellow-200 relative">
            <div className="ml-10 w-7/12">
                <Heading></Heading>
                <Socials></Socials>
                <PersonalDescription></PersonalDescription>
                <ExploreProjects></ExploreProjects>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline-block bg-gray-100 rounded-lg border-8 border-gray-100 w-9/12">
                    <img
                        className="rounded-lg block"
                        src="cropped_headshot.jpeg"
                        alt="Headshot"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
