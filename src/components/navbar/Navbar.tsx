import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            {!isOpen && (
                <div
                    onClick={() => setIsOpen(true)}
                    className="fixed z-10 right-10 top-4 animate-pulse hover:animate-none hover:scale-105 hover:cursor-pointer 
                    transition ease-in-out duration-300"
                >
                    <div className="relative rounded-full h-14 w-14 bg-amber-300 border-4 border-gray-900">
                        <img
                            className="-bottom-1.5 absolute"
                            src="navbar-person.png"
                            alt="Home"
                        />
                    </div>
                </div>
            )}
            {isOpen && (
                <div className="grid grid-cols-2 grid-rows-3 z-10 gap-8 fixed right-10 top-4">
                    <div
                        onClick={() => navigate('/home')}
                        className="relative rounded-full col-start-2 row-start-1 w-14 bg-amber-300 border-4 border-gray-900 
                        hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
                    >
                        <img
                            className="absolute -bottom-1.5"
                            src="navbar-person.png"
                            alt="Home"
                        />
                    </div>
                    <div
                        onClick={() => setIsOpen(false)}
                        className="rounded-full col-start-1 row-start-1 w-14 hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
                    >
                        <img className="" src="navbar-close.png" alt="Close" />
                    </div>
                    <div
                        onClick={() => navigate('/passions')}
                        className="flex flex-row justify-center items-center rounded-full col-start-2 row-start-2 w-14 
                        hover:scale-105 hover:cursor-pointer h-14 bg-red-400 border-4 border-gray-900 transition ease-in-out duration-300"
                    >
                        <img
                            className="w-6"
                            src="navbar-passions.png"
                            alt="Passions"
                        />
                    </div>
                    <div
                        onClick={() => navigate('/technology')}
                        className="flex flex-row justify-center items-center rounded-full col-start-2 row-start-3 
                        hover:scale-105 hover:cursor-pointer w-14 h-14 bg-sky-400 border-4 border-gray-900 transition ease-in-out duration-300"
                    >
                        <img
                            className="w-6"
                            src="navbar-technology.png"
                            alt="Technology"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
