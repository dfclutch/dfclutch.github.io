import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors.js";
import typography from "../../theme/typography.js";

const PreviewContainer = styled.div`
  ${({ wip }) =>
    wip
      ? `border: 2px solid ${colors.wipColor}; border-radius: 4px;`
      : `border-top: 1px solid ${colors.grey};`}
  padding: 6px 12px;
  cursor: pointer;
  margin: 8px 0;

  ${() =>
    window.mobileCheck()
      ? ""
      : `
    &:hover {
      background-color: ${colors.lightGrey};

      > h2 {
        color: ${colors.darkBrand};
      }
    }
  `};

  > p {
    color: black;
  }
`;

const Title = styled.h2`
  color: ${colors.brand};
  font-size: 1.75rem;
  margin: 12px 0;
  text-decoration: none;
`;

const PreviewText = styled.div`
  text-align: justify;
  font-family: "Spectral", serif;
  margin: 8px 0;
  ${typography.medium}
`;

const Preview = ({ onClick, previewContent, title, wip }) => {
  return (
    <PreviewContainer onClick={onClick} wip={wip}>
      <Title>{title}</Title>
      <PreviewText>{previewContent}</PreviewText>
    </PreviewContainer>
  );
};

export default Preview;
