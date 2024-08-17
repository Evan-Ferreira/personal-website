import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import blue_2_arrow_down from '../../assets/images/landing/blue_2_arrow_down.png';

const Landing = () => {
    const navigate = useNavigate();
    const [nextPage, setNextPage] = useState(false);

    const handleStartClick = () => {
        setNextPage(true);
        setTimeout(() => {
            navigate('/home');
        }, 1);
    };

    return (
        <>
            <div className="absolute w-full h-full -z-10 bg-yellow-200"></div>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: nextPage ? '-100vh' : 0 }}
                exit={{ y: nextPage ? '-100vh' : 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className={`flex flex-col justify-evenly items-center w-screen h-screen ${
                    nextPage ? 'bg-yellow-200' : 'bg-amber-300'
                } -space-y-20`}
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-GelionBlack md:text-10xl text-7xl text-neutral-800 m-0 leading-none">
                        HEY, I'M
                    </h1>
                    <h1 className="md:-mt-12 -mt-4 font-GelionBlack md:text-11xl text-9xl text-neutral-800 leading-none">
                        EVAN
                    </h1>
                </div>
                <img
                    className="h-10 w-10 animate-bounce ease-in"
                    src={blue_2_arrow_down}
                    alt="Blue Arrow"
                />
                <div
                    onClick={() => handleStartClick()}
                    className="hover:duration-75 hover:animate-none hover:bg-blue-600 hover:text-gray-200 hover:cursor-pointer
                animate-pulse duration-75 shadow-lg shadow-zinc-500 rounded-full flex justify-center 
                items-center h-14 text-3xl bg-yellow-200 text-blue-950 font-GelionBold md:w-2/12 w-8/12 text-center"
                >
                    Start Here
                </div>
            </motion.div>
        </>
    );
};

export default Landing;
