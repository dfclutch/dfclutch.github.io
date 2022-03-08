import styled, { createGlobalStyle } from 'styled-components';

import { Link } from './components';

export const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Helvetica, Arial, sans-serif;
      color: ${({ color, isInverted }) => isInverted ? color : "white"};
  }

  body {
    background-color: ${({ color, isInverted }) => isInverted ? "white" : color};
  }

  a {
    color: ${({ color, isInverted }) => isInverted ? color : "white"};
    font-weight: bold;
    cursor: pointer;
  }

  section {
    margin: 10px 0;
  }

  p {
    text-align: justify;
    text-justify: inter-word;
    font-size: 18px;
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
        max-width: 600px;
        margin: auto;

        a:hover {
          text-decoration: underline;
        }
  `}
`;

export const LogoContainer = styled.div`
  display: block;
  width: 100%;
  margin: 16px 0;
  font-style: italic;
  font-weight: 900;
  font-size: ${({ isMobile }) => isMobile ? `140px` : `200px`};
  line-height: 75%;
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

export const ColorPickerContainer = styled.div`
  ${({ isMobile }) => isMobile ? `width: 90%;` : `width: 40%;`}
  margin: 48px auto;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 26px;
`;

export const ColorPickerOption = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 18px;
  margin: 0 4px;
  background-color: ${({ color }) => color};
  ${({ selected }) => selected && `
    width: 10px;
    height: 10px;
    margin: 0 8px;
  `}
`