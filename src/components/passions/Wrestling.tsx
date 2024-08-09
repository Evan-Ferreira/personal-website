import React, { useState } from 'react';

const Wrestling = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://gogaelsgo.com/sports/wrestling/roster/2022-2023"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex flex-row justify-center items-center rounded-lg w-8/12 relative text-center ${
                hover ? 'scale-105' : 'scale-100'
            } transition ease-in-out duration-300`}
        >
            <img
                className={`${
                    hover ? 'opacity-30' : ' opacity-100'
                } transition-opacity ease-in-out duration-300`}
                src="wrestling_team.png"
                alt="Wrestling Team"
            />
            <p
                className={`absolute w-10/12 font-GelionRegular text-2xl text-gray-900 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                Outside of my academics, I am a varsity athlete on the Queen's
                Wrestling Team. I enjoy applying my strategic thinking from
                inside the classroom onto the wrestling mat. I have wrestled for
                the past 6 years where I have competed at the provincial and
                national level where I was previously ranked as 3rd in Canada
                for the 2023-2024 season at 72kg.
            </p>
        </a>
    );
};

export default Wrestling;
