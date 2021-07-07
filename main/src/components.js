import React from "react";

import {
  ProjectContainer,
  BigLink
} from './styles';

export function Link({
  href,
  children,
  className, // set by styled compnents
}) {
  return (
    <a href={href} target="_blank" className={className}>
      { children }
    </a>
  );
}

export function Project({
  description,
  link,
  title
}) {
  return (
    <ProjectContainer>
      <BigLink href={link}>
        { title }
      </BigLink>
      <p>
        { description }
      </p>
    </ProjectContainer>
  );
}