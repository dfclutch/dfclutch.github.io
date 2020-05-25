import React from "react";

import HomeContent from "./Content/home";
import AboutContent from "./Content/about";
import ProjectsContent from "./Content/projects";
import ContactContent from "./Content/contact";

const PAGES = {
    home: {
        id: "home",
        text: "Home",
        content: (<HomeContent />),
    },
    about: {
        id: "about",
        text: "About",
        content: (<AboutContent />),
    },
    projects: {
        id: "projects",
        text: "Projects",
        content: (<ProjectsContent />),
    },
    contact: {
        id: "contact",
        text: "Contact",
        content: (<ContactContent />),
    }
}

export {PAGES}