import { useState } from 'react';
import monkey_music from '../../assets/images/technology/monkey_music.png';

const LocalReach = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://github.com/Evan-Ferreira/monkey-music"
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
                src={monkey_music}
                alt="Monkey Music"
            />
            <p
                className={`hidden md:flex absolute w-10/12 font-GelionRegular text-2xl text-gray-100 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                Monkey Music is an app built using Expo that allows users to
                play all their favourite songs from Spotify (for free!) at the
                click of a button. Just copy and paste the link to your Spotify
                playlist and you can listen to the entirety of your playlist
                offline and at no cost!
            </p>
        </a>
    );
};

export default LocalReach;
