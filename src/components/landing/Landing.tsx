import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-evenly items-center w-screen h-screen bg-amber-300 -space-y-20">
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
                onClick={() => navigate('/home')}
                className="hover:duration-75 hover:animate-none hover:bg-blue-600 hover:text-gray-200 hover:cursor-pointer
                animate-pulse duration-75 shadow-lg shadow-zinc-500 rounded-full flex justify-center 
                items-center h-14 text-3xl bg-yellow-200 text-blue-950 font-GelionBold w-2/12 text-center"
            >
                Start Here
            </div>
        </div>
    );
};

export default Landing;
