import styled, { createGlobalStyle } from 'styled-components';

import { Link } from './components';

export const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Helvetica, Arial, sans-serif;
      color: #fff;
  }

  body {
      background-color: #dba20f;
  }

  a {
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  section {
    margin: 10px 0;
  }

  p {
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.1rem;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  padding: 10px 0 20px;

  ${({ isMobile }) => isMobile 
    ? `
        margin: 0 10px;
        max-width: 100%;
      ` 
    : `  
        max-width: 500px;
        margin: auto;

        a:hover {
          text-decoration: underline;
        }
  `}
`;

export const Logo = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

export const SectionHeader = styled.h1`
  font-style: italic;
  font-size: 4em;
`;

export const BigLink = styled(Link)`
  font-size: 1.4em;
`;

export const ProjectContainer = styled.div`
  margin-bottom: 10px;
`;