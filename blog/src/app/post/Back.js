import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";

const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  color: ${colors.black};
  width: 100px;
  margin: 100px auto;

  &:hover {
    color: ${colors.brand};
  }
`;

const Back = () => {
  return <BackWrapper>back</BackWrapper>;
};

export default Back;
