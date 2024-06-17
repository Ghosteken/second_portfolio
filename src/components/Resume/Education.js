import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            {/* part one */}
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">
                        {/* 2019 - Present */}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Education
                    </h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BSc in Computer Science. In progress"
                        subTitle="Anchor University,Lagos(2022 - Present)"
                    />

                </div>
            </div>
            {/* part Two */}

            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">
                        {/* 2021 - 2022 */}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Certifications
                    </h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="CCNA NETWORK FUNDAMENTALS"
                        subTitle="Simply learn.com - (2024)"
                    />
                    <ResumeCard
                        title="DATA ANALYSIS AND SCIENCE "
                        subTitle="Anchor University - (2024)"
                    />
                    <ResumeCard
                        title="Cyber Security Workshop"
                        subTitle="Anchor University - (2024)"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
