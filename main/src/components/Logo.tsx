import styled from 'styled-components';


const LogoContainer = styled.div<{ isMobile: boolean }>`
  margin: 48px 0 16px;
  font-style: italic;
  font-weight: 900;
  font-size: ${({ isMobile }) => isMobile ? `95px` : `140px`};
  line-height: 75%;
  letter-spacing: -0.05em;
`;

export const Logo = ({ isMobile }: { isMobile: boolean }) => (
  <LogoContainer isMobile={isMobile}>
    DAN SCHILLER
  </LogoContainer>
)