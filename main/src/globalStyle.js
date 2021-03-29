import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  html, body {
      margin: 0;
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Poppins, Helvetica, Arial, sans-serif;
      color: #fff;
  }

  body {
      background-color: #fff;
  }


  a {
    text-decoration: none
  }
`;