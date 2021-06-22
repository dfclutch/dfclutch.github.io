import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors.js";

const PreviewContainer = styled.div`
  border-top: 1px solid ${colors.grey};
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;

  ${() => (window.mobileCheck() ? "" : `
    &:hover {
      background-color: ${colors.lightGrey};

      > h2 {
        color: ${colors.brand};
      }
    }
  `)};

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

const Preview = ({ onClick, previewContent, title }) => {
  return (
    <PreviewContainer onClick={onClick}>
      <Title>{title}</Title>
      <PreviewText>{previewContent}</PreviewText>
    </PreviewContainer>
  );
};

export default Preview;
