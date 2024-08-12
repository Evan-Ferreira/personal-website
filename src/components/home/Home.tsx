import { motion } from 'framer-motion';
import Heading from './Heading';
import Socials from './Socials';
import PersonalDescription from './PersonalDescription';
import ExploreProjects from './ExploreProjects';
import Extended from '../extended/Extended';
import { PageContext } from '../../App';
import { useContext } from 'react';

const Home = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { page, setPage } = context;

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
                    opacity: { duration: 3, ease: 'easeInOut' },
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
                    <div className="ml-10 w-7/12">
                        <Heading />
                        <Socials />
                        <PersonalDescription />
                        <ExploreProjects />
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
            </motion.div>
            <Extended />
        </>
    );
};

export default Home;
