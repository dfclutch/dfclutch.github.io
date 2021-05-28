import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  font-weight: 800;

  a {
    color: #fff;
  }
`;

export const NavLink = styled.div`
  font-style: oblique;
  ${({ active }) => active
    ? `
      color: #2f423d;
      text-decoration: underline;
    `
    : ' color: #fff'
  };
`;
