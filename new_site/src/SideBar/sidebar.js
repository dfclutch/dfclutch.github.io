import React from 'react';
import SidebarBlock from "./sidebar_block";

class Sidebar extends React.Component {
    
    setContainerWidth() {
        console.log("set width")
        /*
            Vanilla JS width calculation because it's easy
         */
        let app_width = document.getElementById("app-container").scrollWidth;
        let win_width = window.innerWidth;
        
        let sb_container_width = Math.floor((win_width - app_width) / 2);
        document.getElementById("sidebar-container").style.width = sb_container_width + "px";
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.setContainerWidth);
        this.setContainerWidth();
    }
    
    render() {
        let mystuff_blocks = [
            <SidebarBlock
                heading="Drawings"
                link="http://dfclutch.github.io/apps/drawings"
                text="Mostly pen drawings of cabins and related forest scenes."
                key={0}
            />,
            <SidebarBlock
                heading="Music"
                link="https://danfiller.bandcamp.com/releases"
                text="My bandcamp page for American Primitive guitar music"
                key={1}
            />
        ];
        
        let links_blocks = [
            <SidebarBlock
                heading="Beam Robotics"
                link="http://solarbotics.net/library/pdflib/pdf/living_machines.pdf"
                text="The classic Tilden publication on BEAM robotics: eletronic circuits that can approximate the intelligence of simple insects."
                key={1}
            />,
            
        ]
        return (
            <div id="sidebar-container">
                <div id="sidebar">
                    <div className="sidebar-section">
                        <h1>My Stuff</h1>
                        {mystuff_blocks}
                    </div>
                    <div className="sidebar-section">
                        <h1>Links</h1>
                        {links_blocks}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;