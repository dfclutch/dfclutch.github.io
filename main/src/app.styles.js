import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  margin: 0 10px;

  ${({ isMobile }) => isMobile ?
    `
      max-width: 100%;
      min-height: ${window.innerHeight}px;
    ` :
    `
      max-width: 300px;
      height: 520px;

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
