import { useState, useEffect, createContext } from 'react';
import GoHome from './GoHome';
import GoPassions from './GoPassions';
import GoTech from './GoTech';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <motion.div
                        initial={{ opacity: 0, x: '5vw' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 1, x: 0 }}
                        transition={{
                            opacity: { duration: 0.5 },
                            x: { duration: 0.03, ease: 'easeOut' },
                        }}
                        onClick={() => setIsOpen(false)}
                        className="rounded-full col-start-1 row-start-1 w-14 hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
                    >
                        <img className="" src="navbar-close.png" alt="Close" />
                    </motion.div>
                    <GoHome />
                    <GoPassions />
                    <GoTech />
                </div>
            )}
        </div>
    );
};

export default Navbar;
