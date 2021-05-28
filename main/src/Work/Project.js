import React from "react";
import { ProjectContainer, ProjectLink, ProjectDescription } from "./styles";

function Project({
  description,
  link,
  title
}) {
  return (
    <ProjectContainer>
      <ProjectLink
        href={link}
        target="_blank"
      >
        { title }
      </ProjectLink>
      <ProjectDescription>
        { description }
      </ProjectDescription>
    </ProjectContainer>
  );
}

export default Project;