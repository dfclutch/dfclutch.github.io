import styled, { createGlobalStyle } from "styled-components";

import colors from "../theme/colors";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Poppins, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: ${colors.brand};
  }

  a:visited {
    color: ${colors.brand};
  }

  a:hover {
    color: ${colors.darkGrey};
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  cursor: pointer;
  padding: 10px 0;
  width: 75%;
  font-size: 2.6rem;

  &:hover {
    color: ${colors.brand};
  }
`;

export const Content = styled.div`
  width: ${() => (window.mobileCheck() ? "100vw" : "50vw")};
  padding: ${() => (window.mobileCheck() ? "5px" : "10px")};
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100vh;
  background-color: white;
`;
