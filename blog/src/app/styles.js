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

  ${() => (window.mobileCheck() ? "" : `
    a:hover {
      color: ${colors.darkGrey};
    }
  `)};
`;

export const Title = styled.h1`
  color: ${colors.brand};
  cursor: pointer;
  padding: 10px 0;
  width: 75%;
  ${typography.title}

  ${() => (window.mobileCheck() ? "" : `
    &:hover {
      font-weight: 900;
    }
  `)};
`;

export const Content = styled.div`
  width: ${({ width }) => width};
  padding: ${() => (window.mobileCheck() ? "5px" : "10px")};
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100vh;
  color: blackl
`;

