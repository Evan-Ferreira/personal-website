import React, { useState } from 'react';
import LocalReach from './LocalReach';
import QHacks from './QHacks';
import HawkHacks from './HawkHacks';

const TechnologyGallery = () => {
    return (
        <div className="grid grid-col-1 grid-row-3 justify-items-center gap-y-6 mt-20 pb-20">
            <LocalReach></LocalReach>
            <HawkHacks></HawkHacks>
            <QHacks></QHacks>
        </div>
    );
};

export default TechnologyGallery;
