import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  box-sizing: border-box;

  & iframe {
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "500px")};
  }
`;

export const Map = ({ src, width, height }) => {
  return (
    <Container width={width} height={height}>
      <iframe src={src} width="500px" height="500px"></iframe>
    </Container>
  );
};
