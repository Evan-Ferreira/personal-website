import React from 'react';

const Socials = () => {
    return (
        <div className="flex flex-row justify-start items-center space-x-8 h-40">
            <div
                className="hover:duration-75 hover:animate-none hover:bg-blue-600 hover:text-gray-200 hover:cursor-pointer
    shadow-lg shadow-zinc-500 rounded-lg flex justify-center 
    items-center h-16 text-3xl bg-yellow-400 text-gray-100 font-GelionBold w-2/12 text-center"
            >
                Resume
            </div>
            <a href="https://www.linkedin.com/in/evan-ferreira/">
                <img className="w-14" src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Evan-Ferreira">
                <img className="w-14" src="github.png" alt="GitHub" />
            </a>
            <a href="https://calendly.com/evanjfer/coffee-w-evan">
                <img className="w-14" src="coffee.png" alt="Coffee" />
            </a>
        </div>
    );
};

export default Socials;
