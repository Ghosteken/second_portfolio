import React from 'react';
import { IoLogoNodejs } from 'react-icons/io';
import { SiTypescript, SiPython, SiDjango } from 'react-icons/si';

const Media = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <SiPython />
                    </span>
                    <span className="bannerIcon">
                        <SiTypescript />
                    </span>
                    <span className="bannerIcon">
                        <SiDjango />
                    </span>
                    <span className="bannerIcon">
                        <IoLogoNodejs />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Media;
