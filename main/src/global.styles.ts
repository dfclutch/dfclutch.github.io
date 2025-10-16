import { createGlobalStyle } from 'styled-components';
import { COLORS } from './utils/colors';

type GlobalStyleProps = { color: string, isInverted: boolean }


export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html, body {
      margin: 0;
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Raleway, Helvetica, Arial, sans-serif;
      color: ${({ color, isInverted }) => isInverted ? color : "white"};
  }

  body {
    background-color: ${({ color, isInverted }) => isInverted ? "white" : color};
  }

  a {
    color: ${({ color, isInverted }) => isInverted ? color : "white"};
    font-weight: 900;
    cursor: pointer;
    letter-spacing: 0.5px;

    &:hover {
      color: ${COLORS.lightBlue}
    }
  }

  section {
    margin: 10px 0;
  }

  p {
    text-align: justify;
    font-size: 18px;
    font-weight: 500;
  }
`;
