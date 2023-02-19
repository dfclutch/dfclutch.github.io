import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../theme/colors";

const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  width: 100px;
  margin: 100px auto;
`;

const Back = () => {
  return (
    <Link to="/">
      <BackWrapper>back</BackWrapper>
    </Link>
  );
};

export default Back;
