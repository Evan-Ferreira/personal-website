import { useState } from 'react';
import hawkhacks from '../../assets/images/technology/hawkhacks.png';

const QHacks = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://github.com/JosephLiao542211/HawkHacks2024"
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
                src={hawkhacks}
                alt="Hawk Hacks"
            />
            <p
                className={`hidden md:flex absolute w-10/12 font-GelionRegular text-2xl text-gray-900 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                At HawkHacks 2024, my team and I developed "BETtr". BETtr is a
                web-app that allows users to set public exercise goals amongst
                the BETtr community where anyone is able to compete with you to
                achieve your set goal. To compete for a certain goal, users must
                "buy-in" using NEAR Protocol. Individuals who did not achieve
                the set goal lose their NEAR while individuals who do earn their
                NEAR back and a portion of the NEAR from the individuals who did
                not achieve their goal. To ensure individuals complete the given
                exercise, computer vision is used to track the user's movements
                and ensure they are doing the exercise correctly.
            </p>
        </a>
    );
};

export default QHacks;
