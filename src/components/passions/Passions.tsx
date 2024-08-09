import React from 'react';
import PassionGallery from './PassionGallery';

const Technology = () => {
    return (
        <div className="bg-red-400 text-gray-100">
            <div className="ml-10 mr-10 pt-20">
                <h2 className="font-GelionBlack text-gray-100 text-9xl">
                    PASSIONS
                </h2>
                <h4 className="font-GelionBold text-gray-100 text-3xl">
                    /ˈpæʃ.ən/
                </h4>
                <h4 className="font-GelionRegular text-gray-100 text-3xl">
                    An extreme interest in or wish for doing something
                </h4>
                <PassionGallery></PassionGallery>
            </div>
        </div>
    );
};

export default Technology;
