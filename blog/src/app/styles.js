import styled, { createGlobalStyle } from "styled-components";

import colors from "../theme/colors";
import typography from "../theme/typography";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", Helvetica, sans-serif;
  }

  a {
    color: ${colors.brand};
  }

  a:visited {
    color: ${colors.brand};
  }

  ${() =>
    window.mobileCheck()
      ? ""
      : `
    a:hover {
      color: ${colors.darkBrand};
    }
  `};

  strong {
    font-weight: 600;
  }

  li {
    margin: 8px 0;
    width: 80%;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export const Title = styled.h1`
  cursor: pointer;
  padding: 10px 0;
  width: 75%;
  ${typography.mainTitle}
  color: ${colors.brand};

  ${() =>
    window.mobileCheck()
      ? ""
      : `
    &:hover {
      font-weight: 900;
    }
  `};
`;

export const Content = styled.div`
  width: ${({ width }) => width};
  padding: ${() => (window.mobileCheck() ? "5px" : "10px")};
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100vh;

  & h2 {
    ${typography.large}
  }

  & h3 {
    ${typography.medium}
  }
`;
