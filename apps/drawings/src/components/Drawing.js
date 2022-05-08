import React from "react";
import styled from "styled-components";

import { getS3BucketPath } from "../utilities";

const DrawingTitle = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const DrawingImg = styled.img`
  max-width: 100%;
  max-height: 95vh;
  width: auto;
  height: auto;
`

const DrawingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px; 
`;

const Drawing = ({ drawing }) => {
  return (
    <div>
      <DrawingTitle>{drawing.title}</DrawingTitle>
      <DrawingContainer>
        <DrawingImg
          src={getS3BucketPath(drawing.fileName)}
          alt={drawing.title}
        />
      </DrawingContainer>
    </div>
  )
}

export default Drawing;