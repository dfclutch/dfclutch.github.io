import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { mobileCheck } from "./mobile_check";
import { Link, ProfilePic, Project } from "./components";
import { BigLink, AppContainer, GlobalStyle, SectionHeader } from "./styles.js";
import { Logo } from "./logo.jsx";

const COLORS = [
  "#941d15", // red
  "#BD5800", // orange
  "#d1a000", // yellow
  "#2E614D", // green
  "#1c3a80", // blue
  "#48295c", // purple
];

const HorizontalContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

function App() {
  const [isMobile, setIsMobile] = useState(mobileCheck());
  console.log({ isMobile });
  const [selectedColor, setSelectedColor] = useState(COLORS[4]); // blue
  const [isInverted, setIsInverted] = useState(false);

  window.addEventListener("resize", () => setIsMobile(mobileCheck()));

  return (
    <AppContainer isMobile={isMobile}>
      <Logo isMobile={isMobile} />
      <p>
        Frontend software engineer at{" "}
        <Link href="http://www.spiff.com">Spiff</Link>
      </p>
      <p>
        Pennsylvania native, Ohio State CSE alumnus, javascript evangelist,
        ultralight backpacker, primitive guitarist, 3-finger banjo player,
        espresso brewer, pizza maker
      </p>
      <p>Living in Columbus, OH</p>

      <HorizontalContainer>
        <div>
          <BigLink href="mailto:dwfiller@gmail.com">Email</BigLink>
          <br />
          <BigLink href="https://dfclutch.github.io/dan-filler-resume.pdf">
            Resume
          </BigLink>
          <br />
          <BigLink href="https://github.com/dfclutch">Github</BigLink>
          <br />
          <BigLink href="https://www.linkedin.com/in/dan-filler/">
            LinkedIn
          </BigLink>
          <br />
          <BigLink href="https://dfclutch.github.io/blog/#/">Blog</BigLink>
          <br />
          <BigLink href="https://dfclutch.github.io/apps/drawings">
            Drawings
          </BigLink>
          <br />
          <BigLink href="https://danfiller.bandcamp.com/">Music</BigLink>
          <br />
          <BigLink href="https://www.youtube.com/@danielfiller5569">
            YouTube
          </BigLink>
          <br />
          <BigLink href="https://www.instagram.com/dfclutch/">
            Instagram
          </BigLink>
          <br />
        </div>
        <ProfilePic
          url="https://s3.us-east-2.amazonaws.com/dfclutch.com/bryce.jpg"
          isMobile={isMobile}
        />
      </HorizontalContainer>

      <section>
        <SectionHeader>Projects</SectionHeader>
        <Project
          description="A microlibrary with 0 dependencies for generating random data of all kinds. Published on npm."
          link="https://www.npmjs.com/package/rndom"
          title="rndom"
        />
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
          description="Webpage gathering important data for backpackers and hikers in the Michaux State Forest"
          link="https://dfclutch.github.io/michaux"
          title="Backpacking Michaux"
        />
      </section>

      <GlobalStyle color={selectedColor} isInverted={isInverted} />
    </AppContainer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
