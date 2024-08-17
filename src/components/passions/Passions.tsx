import PassionGallery from './PassionGallery';
import { PageContext } from '../../App';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { page } = context;
    return (
        <div className="relative h-full w-full">
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
                    x: page === '/passions' ? '0' : '-100vw',
                }}
                exit={{
                    opacity: 1,
                    x: page === '/passions' ? '0' : '-100vw',
                }}
                transition={{
                    opacity: { duration: 2, ease: 'easeInOut' },
                    x: { duration: 1, ease: 'easeInOut' },
                }}
                className={`${
                    page === '/technology'
                        ? 'bg-sky-400'
                        : page === '/passions'
                        ? 'bg-red-400'
                        : 'bg-yellow-200'
                } text-gray-100`}
            >
                <div className="md:ml-10 md:mr-10 pt-20 flex flex-col md:justify-start justify-center md:items-start items-center">
                    <h2 className="font-GelionBlack text-gray-100 md:text-9xl text-5xl">
                        PASSIONS
                    </h2>
                    <h4 className="font-GelionBold text-gray-100 md:text-3xl text-xl">
                        /ˈpæʃ.ən/
                    </h4>
                    <h4 className="font-GelionRegular text-gray-100 md:text-3xl text-xl text-center">
                        An extreme interest in or wish for doing something
                    </h4>
                    <PassionGallery></PassionGallery>
                </div>
            </motion.div>
        </div>
    );
};

export default Technology;
