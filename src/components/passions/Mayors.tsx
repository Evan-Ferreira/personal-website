import { useState } from 'react';
import mayor_win_bubble from '../../assets/images/passions/mayor_win_bubble.png';

const Mayors = () => {
    const [hover, setHover] = useState(false);

    return (
        <a
            href="https://www.queensu.ca/gazette/stories/students-recognized-city-kingston-impactful-innovations"
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
                src={mayor_win_bubble}
                alt="Mayor's Innovation Challenge"
            />
            <p
                className={`absolute w-10/12 font-GelionRegular text-2xl text-gray-900 ${
                    hover ? 'opacity-100' : 'opacity-0'
                } transition ease-in-out duration-300`}
            >
                Last March, my two friends and I qualified for the Mayor's
                Innovation Challenge. After a rigorous selections process, the
                mayor of Kingston invites 10 student teams to pitch a social
                impact initative to uplift the Kingston community. We won the
                competition and were awarded $5,000 to kickstart Baobab, an app
                connecting those in need to local donators completely
                anonymously.
            </p>
        </a>
    );
};

export default Mayors;
