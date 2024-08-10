import { motion } from 'framer-motion';
import PassionGallery from './PassionGallery';

interface Props {
    nextPage: string;
}

const Technology = ({ nextPage }: Props) => {
    nextPage = 'passions';
    return (
        <div className="relative overflow-hidden">
            <div className={`absolute w-full h-full bg-red-400 -z-10`}></div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                    x: nextPage != 'passions' ? '-100vw' : 0,
                    opacity: nextPage === 'passions' ? '100%' : 0,
                }}
                exit={{
                    x: nextPage != 'passions' ? '-100vw' : 0,
                    opacity: nextPage === 'passions' ? '100%' : 0,
                }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="bg-red-400 text-gray-100"
            >
                <div className="ml-10 mr-10 pt-20">
                    <h2 className="font-GelionBlack text-gray-100 text-9xl">
                        PASSIONS
                    </h2>
                    <h4 className="font-GelionBold text-gray-100 text-3xl">
                        /ˈpæʃ.ən/
                    </h4>
                    <h4 className="font-GelionRegular text-gray-100 text-3xl">
                        An extreme interest in or wish for doing something
                    </h4>
                    <PassionGallery></PassionGallery>
                </div>
            </motion.div>
        </div>
    );
};

export default Technology;
