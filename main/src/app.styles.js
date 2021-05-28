import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: ${({ isMobile }) => isMobile ? '100%' : '300px'};
  margin-top: ${({ isMobile }) => isMobile ? '30px' : '10px'};
  padding: 0 10px;

  a {
    color: #2f423d;
    text-decoration: none;
  }

  ${({ isMobile }) => !isMobile && `
    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const ContentContainer = styled.div`
  min-height: ${({ isMobile }) => isMobile ? '500px' : '450px'};
`;
