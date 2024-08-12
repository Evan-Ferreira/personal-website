import { useContext } from 'react';
import { PageContext } from '../../App';
import { motion } from 'framer-motion';

const GoTech = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { page, setPage } = context;
    return (
        <motion.div
            initial={{ opacity: 0, y: '-20vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0 }}
            transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.07, ease: 'easeOut' },
            }}
            onClick={() => setPage('/technology')}
            className="flex flex-row justify-center items-center rounded-full col-start-2 row-start-3 
    hover:scale-105 hover:cursor-pointer w-14 h-14 bg-sky-400 border-4 border-gray-900 transition ease-in-out duration-300"
        >
            <img className="w-6" src="navbar-technology.png" alt="Technology" />
        </motion.div>
    );
};

export default GoTech;
