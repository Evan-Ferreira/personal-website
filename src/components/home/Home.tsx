import Heading from './Heading';
import Socials from './Socials';
import PersonalDescription from './PersonalDescription';
import Portrait from './Portrait';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const [nextPage, setNextPage] = useState('home');
    const navigate = useNavigate();
    const getBackgroundColor = () => {
        switch (nextPage) {
            case 'home':
                return 'bg-yellow-200';
            case 'technology':
                return 'bg-sky-400';
            case 'passions':
                return 'bg-red-400';
            default:
                return 'bg-yellow-200';
        }
    };

    const handleTechClick = () => {
        setNextPage('technology');
        setTimeout(() => {
            navigate('/technology');
        }, 1);
    };

    const handlePassionsClick = () => {
        setNextPage('passions');
        setTimeout(() => {
            navigate('/passions');
        }, 1);
    };

    return (
        <div className="relative overflow-hidden">
            <div
                className={`absolute w-full h-full ${getBackgroundColor()} -z-10`}
            ></div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                    x:
                        nextPage === 'technology'
                            ? '-100vw'
                            : nextPage === 'passions'
                            ? '100vw'
                            : 0,
                    opacity: nextPage === 'home' ? '100%' : 0,
                }}
                exit={{
                    x:
                        nextPage === 'technology'
                            ? '-100vw'
                            : nextPage === 'passions'
                            ? '100vw'
                            : 0,
                    opacity: nextPage === 'home' ? '100%' : 0,
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div
                    className={`flex flex-row w-screen h-screen ${getBackgroundColor()} relative`}
                >
                    <div className="ml-10 w-7/12">
                        <Heading></Heading>
                        <Socials></Socials>
                        <PersonalDescription></PersonalDescription>
                        <div
                            onClick={() => handleTechClick()}
                            className="flex flex-row justify-start items-center space-x-4 mt-10 
                                animate-pulse hover:animate-none hover:cursor-pointer"
                        >
                            <p className="font-SourceSerif4ExtraLight text-3xl">
                                Explore my Projects
                            </p>
                            <img
                                className="w-6"
                                src="blue_right_arrow.png"
                                alt="Blue Arrow"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <a
                            href="https://www.linkedin.com/in/evan-ferreira/"
                            className="inline-block bg-gray-100 rounded-lg border-8 border-gray-100 w-9/12 
                    hover:opacity-70 hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
                        >
                            <img
                                className="rounded-lg block"
                                src="cropped_headshot.jpeg"
                                alt="Headshot"
                            />
                        </a>
                    </div>
                </div>
                <div
                    className={`flex flex-row w-screen h-screen ${getBackgroundColor()} items-center justify-start relative`}
                >
                    <Portrait></Portrait>
                    <div className="flex flex-col justify-center items-start w-5/12 space-y-20">
                        <p className="font-SourceSerif4ExtraLight text-xl">
                            Outside of my academics, I am a varsity wrestler at
                            Queen's University, previously ranked 3rd in Canada.
                            In fact, I'm passionate about almost all sports
                            including ultimate frisbee, cross country, skiing,
                            and spikeball. Alongside my love for sports, I am
                            enthusiastic about entrepreneurship and startups,
                            where I co-chair Canada's largest undergraduate AI
                            product incubator, and have raised over $40,000 in
                            non-dilutive funding for my own computer vision
                            startup.
                        </p>
                        <div
                            onClick={() => handlePassionsClick()}
                            className="flex flex-row justify-start items-center space-x-4 animate-pulse hover:animate-none hover:cursor-pointer"
                        >
                            <p className="font-SourceSerif4ExtraLight text-3xl">
                                Learn More
                            </p>
                            <img
                                className="w-6"
                                src="red_right_arrow.png"
                                alt="Blue Arrow"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export default Home;
