import { useState, useEffect, createContext } from 'react';
import GoHome from './GoHome';
import GoPassions from './GoPassions';
import GoTech from './GoTech';

interface PageContextType {
    page: string;
    setPage: (page: string) => void;
}

export const PageContext = createContext<PageContextType | undefined>(
    undefined
);

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
                    <div
                        onClick={() => setIsOpen(false)}
                        className="rounded-full col-start-1 row-start-1 w-14 hover:scale-105 hover:cursor-pointer transition ease-in-out duration-300"
                    >
                        <img className="" src="navbar-close.png" alt="Close" />
                    </div>
                    <GoHome />
                    <GoPassions />
                    <GoTech />
                </div>
            )}
        </div>
    );
};

export default Navbar;
