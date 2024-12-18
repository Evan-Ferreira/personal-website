import { useState } from 'react';
import local_reach from '../../assets/images/passions/local_reach.png';

const LocalReach = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://thelocalreach.ca/"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex flex-row justify-center items-center rounded-lg md:w-8/12 w-10/12 relative text-center ${
                hover ? 'scale-105' : 'scale-100'
            } transition ease-in-out duration-300`}
        >
            <img
                className={`${
                    hover ? 'opacity-30' : ' opacity-100'
                } transition-opacity ease-in-out duration-300`}
                src={local_reach}
                alt="Local Reach"
            />
            <p
                className={`absolute w-10/12 font-GelionRegular hidden md:flex text-2xl text-gray-100 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                Local Reach is a computer vision startup I co-founded that
                allows local restaurants and bars to monetize their TVs'
                commerical breaks. Our device uses AI to detect TV commercial
                breaks and switch to a stream of different advertisers during
                these periods. Any venue partnered with us is paid an agreed
                upon percentage of the revenue generated from their venue.
            </p>
        </a>
    );
};

export default LocalReach;
