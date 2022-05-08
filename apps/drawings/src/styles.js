import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    overflow-y: scroll;
  }

  body {
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    background-color: white;
  }
`;
