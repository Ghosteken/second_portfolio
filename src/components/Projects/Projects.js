import React from 'react';
import Title from '../Layouts/Title';
import {
    staffconn,
    the_venue,
    landing,
    amazon,
    filter,
    travel,
} from '../../assets/index';

import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="Landing Page"
                    des="Landing page for a recuitment company  where you can search for services and talent "
                    src={landing}
                    gitRepo="https://github.com/Ghosteken/LandingPage2"
                    live="https://landing-page2-vert.vercel.app/"
                />
                <ProjectsCard
                    title="Nextjs Filter System"
                    des="This is a responsive website that filters the choice of clothing due to specific values"
                    src={filter}
                    gitRepo="https://github.com/Ghosteken/filtering_sys"
                    live=""
                />
            </div>
        </section>
    );
};

export default Projects;
