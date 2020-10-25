import React from 'react';
import styled from 'styled-components';

import { ContentContainer } from './ContentContainer';

const ProjectsContentContainer = styled(ContentContainer)`
    box-sizing: border-box;
    margin: ${
		() => (
			window.mobileCheck()
			? "5vw 7.5vw"
			: "9vh 8vh"
		)
    };
	font-size: ${
		() => (
			window.mobileCheck()
			? "24px"
			: "16px"
		)
	};
    text-align: justify;
    max-height: 50vh;
    max-width: ${
		() => (
			window.mobileCheck()
			? "49vw"
			: "44vh"
		)
    };
    border-radius: 0px;

    a {
        display: inline-block;     
        position: relative;
        padding: 2em;     
        margin: -2em;
    }

    h3 {
        margin: 0;
        padding: 0;
    }
`;

export const ProjectsContent = () => {
    return (
        <ProjectsContentContainer>
            <p> 
                <a href="http://dfclutch.github.io/apps/epsim" target="_blank"><h3>Covid SAIRD simulation</h3></a><br />
                D3js-based interactive graphical simulation based on the SIR epidemic model.
            </p>
            <p>
                <a href="http://dfclutch.github.io/apps/d3" target="_blank"><h3>Network Generation Models</h3></a><br />
                An interactive visualization of several random network generation models.
            </p>
            <p>
                <a href="http://dfclutch.github.io/apps/graphs" target="_blank"><h3>Graph Algorithms</h3></a><br />
                Vanilla JS visualization of some graph algorithms, implements a geograph graph generation model I created.
            </p>
            <p>
                <a href="http://java-docs.herokuapp.com" target="_blank"><h3>Java Docs</h3></a><br />
                Basic fullstack app for recording coffee recipes.
            </p>
        </ProjectsContentContainer>
    );
}