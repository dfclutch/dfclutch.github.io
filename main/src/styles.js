import styled, { createGlobalStyle } from "styled-components";

import { Link } from "./components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;0,900;1,900&display=swap');

  html, body {
      margin: 0;
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: 'Raleway', sans-serif;
      font-weight: 500;
      color: ${({ color, isInverted }) => (isInverted ? color : "white")};
  }

  body {
    background-color: ${({ color, isInverted }) =>
      isInverted ? "white" : color};
  }

  a {
    color: ${({ color, isInverted }) => (isInverted ? color : "white")};
    font-weight: bold;
    letter-spacing: .5px;
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

  ${({ isMobile }) =>
    isMobile
      ? `
        margin: 0 10px;
        max-width: 100%;
      `
      : `  
        max-width: 600px;
        margin: auto;

        a:hover {
          color: #ccc;
        }
  `}
`;

export const LogoContainer = styled.div`
  display: block;
  width: 100%;
  margin: 16px 0;
  font-style: italic;
  font-weight: 900;

  font-size: ${({ isMobile }) => (isMobile ? `110px` : `190px`)};
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
  width: 200px;
  margin: 48px auto 12px;
  background-color: #ffffff;
  border-radius: 18px;
  padding 9px 0;
`;

export const ColorPickerOption = styled.div`
  width: calc(100% - 18px);
  height: 18px;
  border-radius: 18px;
  margin: 0 auto 0;
  background-color: ${({ color }) => color};
  ${({ selected }) =>
    selected &&
    `
    height: 18px;
  `}
`;

export const InverterContainer = styled.div`
  width: 160px;
  height: 26px;
  margin: auto;
  border-radius: 26px;
  color: ${({ color, isInverted }) => (isInverted ? "white" : color)};
  background-color: ${({ color, isInverted }) =>
    isInverted ? color : "white"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;

export const ProfilePicContainer = styled.img`
  width: auto;
  height: auto;
  max-width: ${({ isMobile }) => (isMobile ? "55%" : "40%")};
  border-radius: 50%;
  margin: auto;
`;
