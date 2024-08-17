import { motion } from 'framer-motion';
import Heading from './Heading';
import Socials from './Socials';
import PersonalDescription from './PersonalDescription';
import ExploreProjects from './ExploreProjects';
import Extended from '../extended/Extended';
import { PageContext } from '../../App';
import { useContext, useState } from 'react';
import cropped_headshot from '../../assets/images/home/cropped_headshot.jpeg';

const Home = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { page } = context;
    const [hover, setHover] = useState(false);

    return (
        <>
            <div
                className={`absolute h-full w-full -z-10 ${
                    page === '/technology'
                        ? 'bg-sky-400'
                        : page === '/passions'
                        ? 'bg-red-400'
                        : 'bg-yellow-200'
                }`}
            ></div>
            <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{
                    opacity: 1,
                    x:
                        page === '/technology'
                            ? '-100vw'
                            : page === '/passions'
                            ? '100vw'
                            : '0',
                }}
                exit={{
                    opacity: 1,
                    x:
                        page === '/technology'
                            ? '-100vw'
                            : page === '/passions'
                            ? '100vw'
                            : '0',
                }}
                transition={{
                    opacity: { duration: 2, ease: 'easeInOut' },
                    x: { duration: 1, ease: 'easeInOut' },
                }}
            >
                <div
                    className={`flex flex-row w-screen h-screen ${
                        page === '/technology'
                            ? 'bg-sky-400'
                            : page === '/passions'
                            ? 'bg-red-400'
                            : 'bg-yellow-200'
                    } relative`}
                >
                    <div className="md:ml-10 -mt-16 md:w-7/12 w-full md:mr-0 ml-5 mr-5 flex flex-col justify-center md:items-start items-center space-y-4">
                        <Heading />
                        <Socials />
                        <PersonalDescription />
                        <ExploreProjects />
                    </div>
                    <a
                        href="https://www.linkedin.com/in/evan-ferreira/"
                        className={`hidden md:flex md:w-full w-0 flex-row justify-center items-center ${
                            hover ? 'scale-105' : 'scale-100'
                        } ${
                            hover ? 'opacity-70' : 'opacity-100'
                        } transition ease-in-out duration-300`}
                    >
                        <div
                            className="inline-block bg-gray-100 rounded-lg border-8 border-gray-100 w-7/12 
                        "
                        >
                            <img
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                className="rounded-lg block"
                                src={cropped_headshot}
                                alt="Headshot"
                            />
                        </div>
                    </a>
                </div>
            </motion.div>
            <Extended />
        </>
    );
};

export default Home;
