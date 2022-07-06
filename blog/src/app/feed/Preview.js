import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors.js";

const PreviewContainer = styled.div`
  border-top: 1px solid ${colors.white};
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;

  ${() =>
    window.mobileCheck()
      ? ""
      : `
    &:hover {
      background-color: ${colors.darkBrand};

      > h2 {
        color: white;
      }
    }
  `};

  > p {
    color: black;
  }
`;

const Title = styled.h2`
  color: ${colors.white};
  font-size: 1.75rem;
  margin: 12px 0;
  text-decoration: none;
`;

const PreviewText = styled.div`
  text-align: justify;
  font-family: "Vollkorn", serif;
  margin: 8px 0;
`;

const Preview = ({ onClick, previewContent, title }) => {
  return (
    <PreviewContainer onClick={onClick}>
      <Title>{title}</Title>
      <PreviewText>{previewContent}</PreviewText>
    </PreviewContainer>
  );
};

export default Preview;
