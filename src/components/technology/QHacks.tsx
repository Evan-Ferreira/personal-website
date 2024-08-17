import { useState } from 'react';
import qhacks from '../../assets/images/technology/qhacks.png';

const QHacks = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://devpost.com/software/deer-journal"
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
                src={qhacks}
                alt="QHacks"
            />
            <p
                className={`hidden md:flex absolute w-10/12 font-GelionRegular text-2xl text-gray-900 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                At QHacks 2024, my team and I developed "Deer, Journal". "Deer,
                Journal" is an interactive AI plushed animal with a goal of
                improving childhood mental health through the practice of
                journalling. Users are prompted by the stuffie to talk about
                their day and feelings, where they are given tailored responses
                and follow-up questions. There is also a mobile-compatible app
                that creates a goals "Vision Board" using DALL-E to help
                children visualize their goals each day.
            </p>
        </a>
    );
};

export default QHacks;
