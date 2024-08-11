import React from 'react';
import Portrait from './Portrait';
import LearnMore from './LearnMore';

const Extended = () => {
    return (
        <div className="flex flex-row w-screen h-screen bg-yellow-200 items-center justify-start relative">
            <Portrait></Portrait>
            <div className="flex flex-col justify-center items-start w-5/12 space-y-20">
                <p className="font-SourceSerif4ExtraLight text-xl">
                    Outside of my academics, I am a varsity wrestler at Queen's
                    University 🤼‍♂️, previously ranked 3rd in Canada 🇨🇦. In fact,
                    I'm passionate about almost all sports including ultimate
                    frisbee, cross country, skiing, and spikeball ⛷️. Alongside
                    my love for sports, I am enthusiastic about entrepreneurship
                    and startups, where I co-chair Canada's largest
                    undergraduate AI product incubator 🤖, and have raised over
                    $40,000 in non-dilutive funding for my own computer vision
                    startup 💸.
                </p>
                <LearnMore></LearnMore>
            </div>
        </div>
    );
};

export default Extended;
