import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";

export const WIPTagWrapper = styled.span`
  color: ${colors.wipColor};
  font-family: "Roboto", Helvetica, sans-serif;
`;

export const WIPBorder = styled.div`
  border-top: 2px solid ${colors.wipColor};
  border-bottom: 2px solid ${colors.wipColor};
`;

export const WIPTag = ({ children, wip }) => {
  if (!wip) return children;
  return (
    <WIPBorder>
      <WIPTagWrapper>WORK IN PROGRESS</WIPTagWrapper>
      {children}
      <WIPTagWrapper>WORK IN PROGRESS</WIPTagWrapper>
    </WIPBorder>
  );
};
