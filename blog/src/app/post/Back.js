import React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";

const BackWrapper = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 18px 0;
  font-size: 18px;
  color: ${colors.black};

  &:hover {
    color: ${colors.brand};
  }
`;

const Back = () => {
  return <BackWrapper>back</BackWrapper>;
};

export default Back;
