import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 10px;
  padding: 4px 0;
  background-color: white;
  border-radius: 8px;

  position: absolute;
  bottom: 0;
`;

export const NavLink = styled.div`
  font-style: oblique;
  margin-right: 12px;
  ${({ active }) => active
    ? `
      color: #8cada3;
      text-decoration: underline;
    ` : ''
  };
`;
