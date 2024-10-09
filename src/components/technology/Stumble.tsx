import { useState } from 'react';
import stumble from '../../assets/images/technology/stumble.png';

const LocalReach = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://github.com/Evan-Ferreira/Stumble_HackTheHill2024"
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
                src={stumble}
                alt="Stumble"
            />
            <p
                className={`hidden md:flex absolute w-10/12 font-GelionRegular text-2xl text-gray-900 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                About Stumble is a platform that merges the structure of a
                learning tool like LeetCode with real-world dating scenarios,
                providing users with a space to hone their conversational
                abilities. By gamifying the dating process, we aim to help
                people feel more confident and prepared for meaningful
                connections.
            </p>
        </a>
    );
};

export default LocalReach;
