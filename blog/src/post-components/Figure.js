import React, { useState } from 'react';
import styled from "styled-components";
import { addWindowSizeListener, getBreakpointValue } from '../utilities/responsive';


const StyledFigure = styled.figure`
  width: ${({figWidth}) => figWidth};
  max-width: 100%;
  margin: 10px auto;
  display: grid;

  & img {
    width: 100%;
    height: auto;
  }

  & figcaption {
    padding: 8px 0;
    font-family: "Vollkorn", serif;
    font-size: 1rem;
    color: black;
  }
`;

function Figure({
  alt,
  breakpoints,
  caption,
  src,
}) {
  const [ width, setWidth ] = useState(getBreakpointValue(breakpoints))
  addWindowSizeListener(breakpoints, setWidth);

  return (
    <StyledFigure
      figWidth={width || '50%'}
    >
      <img
        src={src}
        alt={alt ? alt : caption}
      />
      {
        caption &&
        <figcaption>
          {caption}
        </figcaption>
      }
    </StyledFigure>
  );
}

export default Figure;
