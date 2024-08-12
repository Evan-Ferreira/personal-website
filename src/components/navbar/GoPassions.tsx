import { useContext } from 'react';
import { PageContext } from '../../App';
import { motion } from 'framer-motion';
import navbar_passions from '../../assets/images/navbar/navbar_passions.png';

const GoPassions = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('Context is not available');
    }
    const { setPage } = context;

    return (
        <motion.div
            initial={{ opacity: 0, y: '-10vh' }}
            animate={{ opacity: 1, y: '0' }}
            exit={{ opacity: 1, y: '0' }}
            transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.03, ease: 'easeOut' },
            }}
            onClick={() => setPage('/passions')}
            className="flex flex-row justify-center items-center rounded-full col-start-2 row-start-2 w-14 
    hover:scale-105 hover:cursor-pointer h-14 bg-red-400 border-4 border-gray-900 transition ease-in-out duration-300"
        >
            <img className="w-6" src={navbar_passions} alt="Passions" />
        </motion.div>
    );
};

export default GoPassions;
