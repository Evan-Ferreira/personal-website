import Portrait from './Portrait';
import LearnMore from './LearnMore';
import { PageContext } from '../../App';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Extended = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { page } = context;
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
                className={`flex md:flex-row flex-col w-screen h-screen md:space-y-0 space-y-10 ${
                    page === '/technology'
                        ? 'bg-sky-400'
                        : page === '/passions'
                        ? 'bg-red-400'
                        : 'bg-yellow-200'
                } items-center justify-start relative`}
            >
                <Portrait></Portrait>
                <div className="flex flex-col justify-center md:items-start items-center md:w-5/12 md:space-y-20 space-y-10 md:mr-0 md:ml-0 ml-5 mr-5">
                    <p className="font-SourceSerif4ExtraLight md:text-xl text-md">
                        Outside of my academics, I am a varsity wrestler at
                        Queen's University, previously ranked 3rd in Canada. In
                        fact, I'm passionate about almost all sports including
                        ultimate frisbee, cross country, skiing, and spikeball.
                        Alongside my love for sports, I am enthusiastic about
                        entrepreneurship and startups, where I co-chair Canada's
                        largest undergraduate AI product incubator, and have
                        raised $60,000+ in non-dilutive funding for my own
                        computer vision startup.
                    </p>
                    <LearnMore></LearnMore>
                </div>
            </motion.div>
        </>
    );
};

export default Extended;
