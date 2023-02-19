import React from "react";
import styled from "styled-components";
import colors from "../../../theme/colors";

const WIPToggleButton = styled.button`
  ${({ showWIP }) =>
    showWIP
      ? `background-color: ${colors.wipColor}; color: white;`
      : `background-color: ${colors.lightGrey}`};
  width: 100px;
  padding: 4px 0;

  border-radius: 4px;
  margin: 4px 0;
`;

export const WIPToggle = ({ toggleShowWIP, showWIP }) => {
  const prefix = showWIP ? "Hide" : "Show";
  return (
    <WIPToggleButton
      onClick={toggleShowWIP}
      showWIP={showWIP}
      title={`${prefix} work in progress articles`}
    >
      {prefix} WIP
    </WIPToggleButton>
  );
};
