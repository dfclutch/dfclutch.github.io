import React from "react";
import styled from "styled-components";

import colors from "../../colors";

const CounterWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 16px 0;
`;

const ChangePageWrapper = styled.div`
  color: ${colors.grey};
  padding: 0 8px;
  display: inline-block;

  &:hover {
    cursor: pointer;
    color: ${colors.red};
  }
`;

export const PageCounter = ({ maxPageIndex, nextPage, page, prevPage }) => {
  return (
    <CounterWrapper>
      {page > 0 && (
        <ChangePageWrapper onClick={prevPage}>prev</ChangePageWrapper>
      )}
      {page + 1}
      {page + 1 < maxPageIndex && (
        <ChangePageWrapper onClick={nextPage}>next</ChangePageWrapper>
      )}
    </CounterWrapper>
  );
};
