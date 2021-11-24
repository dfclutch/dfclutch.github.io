import styled, { createGlobalStyle } from "styled-components";

const COLORS = {
  fontColor: "#fff",
  pageBg: "#135937",
  sectionBg: "#538c6f",
  subTitle: "#fff",
  menuSubTitle: "#fff",
  drinkSubTitle: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${COLORS.pageBg};
    font-family: Helvetica, Arial, sans-serif;
    color: ${COLORS.fontColor};
    line-height: 1.5;

    strong {
      font-size: 1.1em;
    }
  }

  hr {
    margin-bottom: 18px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: ${({ isMobile }) => (isMobile ? "100%" : "50%")};
  padding: 0 8px;
  margin: 48px auto;
`;

export const Title = styled.h1`
  color: white;
  font-style: italic;
  font-weight: 900;
  font-size: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  border-radius: 8px;
  padding: 12px;
  background-color: ${COLORS.sectionBg};
  margin: 16px 0;
`;

export const SubTitle = styled.h2`
  color: ${COLORS.subTitle};
  margin: 8px 0;
  font-style: italic;
  font-weight: 700;
  font-size: 38px;
`;

export const MenuSubTitle = styled.h3`
  color: ${COLORS.menuSubTitle};
  margin: 20px 0 10px;
  font-weight: 600;
  font-size: 30px;
  text-decoration: underline;
`;

export const DrinkSubTitle = styled.h4`
  color: ${COLORS.drinkSubTitle};
  margin: 12px 0 6px;
  font-size: 26px;
`;
