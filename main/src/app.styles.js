import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;

  ${({ isMobile, windowHeight }) => isMobile ?
    `
      margin: 0 10px;
      max-width: 100%;
      min-height: ${windowHeight}px;
    ` :
    `  
      max-width: 500px;
      margin: auto;
      height: 650px;

      a:hover {
        text-decoration: underline;
      }
  `}

  a {
    color: #2f423d;
    text-decoration: none;
  }
`;

export const ContentContainer = styled.div`
  padding-top: ${({ isMobile }) => isMobile ? '30px' : '10px'};
`;
