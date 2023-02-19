import React from "react";
import styled from "styled-components";
import colors from "../theme/colors";
import typography from "../theme/typography";

export const PullquoteContainer = styled.div`
  max-width: 100%;
  width: fit-content;
  background-color: ${colors.lightGrey};
  border-radius: 8px;
  margin: 8px auto;
  padding: 16px;
  ${typography.mono};
`;

export const PullquoteLine = styled.div`
  margin: 8px auto;
`;

export const Pullquote = ({ lines }) => {
  return (
    <PullquoteContainer>
      {lines.map((line, i) => (
        <PullquoteLine key={`${i}-${line}`}>{line}</PullquoteLine>
      ))}
    </PullquoteContainer>
  );
};
