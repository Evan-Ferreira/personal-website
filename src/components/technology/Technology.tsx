import React from 'react';
import TechnologyGallery from './TechnologyGallery';

const Technology = () => {
    return (
        <div className="bg-sky-400 text-gray-100">
            <div className="ml-10 mr-10 pt-20">
                <h2 className="font-GelionBlack text-gray-100 text-9xl">
                    TECHNOLOGY
                </h2>
                <h4 className="font-GelionBold text-gray-100 text-3xl">
                    /tek'nɑ:.lə.dʒi/
                </h4>
                <h4 className="font-GelionRegular text-gray-100 text-3xl">
                    The practical, especially industrial, use of scientific
                    discoveries:
                </h4>
                <TechnologyGallery></TechnologyGallery>
            </div>
        </div>
    );
};

export default Technology;
