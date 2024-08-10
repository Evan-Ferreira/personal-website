import { motion } from 'framer-motion';
import TechnologyGallery from './TechnologyGallery';

interface Props {
    nextPage: string;
}

const Technology = ({ nextPage }: Props) => {
    nextPage = 'technology';
    return (
        <div className="relative overflow-hidden">
            <div className={`absolute w-full h-full bg-sky-400 -z-10`}></div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                    x: nextPage != 'technology' ? '-100vw' : 0,
                    opacity: nextPage === 'technology' ? '100%' : 0,
                }}
                exit={{
                    x: nextPage != 'technology' ? '-100vw' : 0,
                    opacity: nextPage === 'technology' ? '100%' : 0,
                }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="bg-sky-400 text-gray-100"
            >
                <div className="ml-10 mr-10 pt-20">
                    <h2 className="font-GelionBlack text-gray-100 text-9xl">
                        TECHNOLOGY
                    </h2>
                    <h4 className="font-GelionBold text-gray-100 text-3xl">
                        /tek'nɑ:.lə.dʒi/
                    </h4>
                    <h4 className="font-GelionRegular text-gray-100 text-3xl">
                        The practical, especially industrial, use of scientific
                        discoveries:
                    </h4>
                    <TechnologyGallery></TechnologyGallery>
                </div>
            </motion.div>
        </div>
    );
};

export default Technology;
