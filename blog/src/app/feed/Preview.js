import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors.js";

const PreviewContainer = styled.div`
  margin: 0 0 10px 0;
  border-top: 1px solid black;
  padding: 6px 12px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: ${colors.lightGrey};

    > h2 {
      color: ${colors.brand};
    }
  }

  > p {
    color: black;
  }
`;

const Title = styled.h2`
  color: ${colors.black};
  font-size: 1.75rem;
  margin: 0;
`;

const PreviewText = styled.p`
  text-align: justify;
  font-family: "Vollkorn", serif;
`;

export const Preview = ({ onClick, previewText, title }) => {
  return (
    <PreviewContainer onClick={onClick}>
      <Title>{title}</Title>
      <PreviewText>{previewText}</PreviewText>
    </PreviewContainer>
  );
};
