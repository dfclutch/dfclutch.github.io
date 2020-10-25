import React from 'react';

import { HomeContent } from './Content/home';
import { AboutContent } from './Content/about';
import { ProjectsContent } from './Content/projects';

export const pageIds = {
    home: "home",
    about: "about",
    projects: "projects",
}

export const circleElements = {
    pages: {
        home: {   
            id: pageIds.home,
            text: "Home",
            angle: "-120",
            duration: "6s",
            active: false,
            content: <HomeContent />,
        },
        about: {
            id: pageIds.about,
            text: "About",
            angle: "-140",
            duration: "6s",
            active: false,
            content: <AboutContent />,
        },
        projects: {
            id: pageIds.projects,
            text: "Projects",
            angle: "-160",
            duration: "3s",
            active: false,
            content: <ProjectsContent />,
        }
    },
    links: [
        {
            text: "Resume",
            angle: "-180",
            duration: "4s",
            link: "http://dfclutch.github.io/dan-filler-resume.pdf",
        },{
            text: "Drawings",
            angle: "-200",
            duration: "2s",
            link: "http://dfclutch.github.io/apps/drawings",
        },
        /*{
            text: "Blog (eventually)",
            angle: "-220",
            duration: "1s",
        },*/
    ]
};

export const setActivePage = (id) => {
    return {
        ...circleElements,
        pages: {
            ...circleElements.pages,
            [id]: {
                ...circleElements.pages[id],
                active: true,
            }
        }
    };
}