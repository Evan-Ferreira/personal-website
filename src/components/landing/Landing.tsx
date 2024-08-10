import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
    const [nextPage, setNextPage] = useState(false);
    const navigate = useNavigate();

    function handleClick(): void {
        setNextPage(true);
        setTimeout(() => navigate('/home'), 500); // Delay navigation to match animation duration
    }

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute w-screen h-screen bg-yellow-200 -z-10"></div>
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{
                    opacity: nextPage ? 0 : 1,
                    y: nextPage ? '-100vh' : 0,
                }}
                exit={{ opacity: 1, y: '-100vh' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={`flex flex-col justify-evenly items-center w-screen h-screen z-10 ${
                    nextPage ? 'bg-yellow-200' : 'bg-amber-300'
                } -space-y-20`}
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-GelionBlack text-10xl text-neutral-800 m-0 leading-none">
                        HEY, I'M
                    </h1>
                    <h1 className="-mt-12 font-GelionBlack text-11xl text-neutral-800 leading-none">
                        EVAN
                    </h1>
                </div>
                <img
                    className="h-10 w-10 animate-bounce ease-in"
                    src="blue_2_arrow_down.png"
                    alt="Blue Arrow"
                />
                <div
                    onClick={handleClick}
                    className="hover:duration-75 hover:animate-none hover:bg-blue-600 hover:text-gray-200 hover:cursor-pointer
                animate-pulse duration-75 shadow-lg shadow-zinc-500 rounded-full flex justify-center 
                items-center h-14 text-3xl bg-yellow-200 text-blue-950 font-GelionBold w-2/12 text-center"
                >
                    Start Here
                </div>
            </motion.div>
        </div>
    );
};

export default Landing;
