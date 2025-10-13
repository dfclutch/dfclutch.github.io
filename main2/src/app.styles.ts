import styled from "styled-components";

export const AppContainer = styled.div<{ isMobile: boolean }>`
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

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`