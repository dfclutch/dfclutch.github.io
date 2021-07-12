import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { mobileCheck } from './mobile_check';
import { Link, Project } from './components';
import {
    BigLink,
    AppContainer,
    GlobalStyle,
    Logo,
    SectionHeader,
} from './styles.js';

function App() {
    const [ isMobile, setIsMobile] = useState(mobileCheck());

    window.addEventListener(
        'resize',
        () => setIsMobile(mobileCheck())
    );

    return (
        <AppContainer isMobile={isMobile}>
            <Logo src="./img/logotype.png"/>
            <p>
            {'Frontend software engineer at '}
                <Link href="http://www.spiff.com">
                    Spiff
                </Link>
            </p>
            <p>
            Pennsylvania Native, Ohio State CSE Alumnus, JavaScript evangelist, Backpacker, Guitar-player, Coffee Maker, Map Drawer
            </p>
            <p>
            Living in Columbus, OH
            </p>

            <section>
                <SectionHeader>Projects</SectionHeader>
                <Project
                    description="D3js-based interactive graphical simulation based on the SIR epidemic model."
                    link="http://dfclutch.github.io/apps/epsim"
                    title="Covid SAIRD simulation"
                />
                <Project
                    description="An interactive visualization of several random network generation models."
                    link="http://dfclutch.github.io/apps/d3"
                    title="Network Generation Models"
                />
                <Project
                    description="Vanilla JS visualization of some graph algorithms, implements a novel geographic graph generation model."
                    link="http://dfclutch.github.io/apps/graphs"
                    title="Graph Algorithms"
                />
                <Project
                    description="Basic fullstack app for recording coffee recipes. currently being rewritten"
                    link="https://github.com/dfclutch/javadocs"
                    title="Java Docs"
                />
            </section>
            <section>
                <SectionHeader>Links</SectionHeader>
                <BigLink href="mailto:dwfiller@gmail.com">
                    Email
                </BigLink>
                <br />
                <BigLink href="https://dfclutch.github.io/dan-filler-resume.pdf">
                    Resume
                </BigLink>
                <br />
                <BigLink href="https://github.com/dfclutch">
                    Github
                </BigLink>
                <br />
                <BigLink href="https://www.linkedin.com/in/dan-filler/">
                    LinkedIn
                </BigLink>
                <br />
                <BigLink href="https://dfclutch.github.io/blog/#/">
                    Blog
                </BigLink>
                <br />
                <BigLink href="https://dfclutch.github.io/apps/drawings">
                    Drawings
                </BigLink>
                <br />
                <BigLink href="https://dfclutch.github.io/michaux/">
                    Michaux
                </BigLink>
                <br />
            </section>
                    
            <GlobalStyle />
        </AppContainer>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));