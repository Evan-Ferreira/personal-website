import { useState } from 'react';
import leetbros from '../../assets/images/technology/leetbros.png';

const LocalReach = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://github.com/Evan-Ferreira/leet-bros"
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
                src={leetbros}
                alt="Leet Bros"
            />
            <p
                className={`hidden md:flex absolute w-10/12 font-GelionRegular text-2xl text-gray-900 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                Leet Bros is a project I built to motivate my friends and I to
                do practice our leetcode. Inspired by notifications you receive
                on Duolingo when a friend suprasses you in points, Leet Bros
                automatically sends SMS texts to myself and my friends whenever
                one of us surpasses the others in our Leetcode rankings.
            </p>
        </a>
    );
};

export default LocalReach;
