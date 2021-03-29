import React from 'react';
import styled from 'styled-components';


export const ProjectsContent = () => {
    return (
        <div>
            <p> 
                <a href="http://dfclutch.github.io/apps/epsim" target="_blank"><h3>Covid SAIRD simulation</h3></a>
                D3js-based interactive graphical simulation based on the SIR epidemic model.
            </p>
            <p>
                <a href="http://dfclutch.github.io/apps/d3" target="_blank"><h3>Network Generation Models</h3></a>
                An interactive visualization of several random network generation models.
            </p>
            <p>
                <a href="http://dfclutch.github.io/apps/graphs" target="_blank"><h3>Graph Algorithms</h3></a>
                Vanilla JS visualization of some graph algorithms, implements a geographic graph generation model I created.
            </p>
            <p>
                <a href="http://java-docs.herokuapp.com" target="_blank"><h3>Java Docs</h3></a>
                Basic fullstack app for recording coffee recipes.
            </p>
        </div>
    );
}