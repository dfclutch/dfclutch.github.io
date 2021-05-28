import React from "react";

import Project from "./Project";

function Work() {
  return (
    <>
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
        description="Basic fullstack app for recording coffee recipes."
        link="http://java-docs.herokuapp.com"
        title="Java Docs"
      />
    </>
  );
}

export default Work;
