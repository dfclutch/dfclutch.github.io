import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavLink } from './styles';

export function Nav() {
  const { pathname } = useLocation();

  return (
    <NavContainer>
      <Link to="/">
        <NavLink active={pathname === '/'}>
          Home
        </NavLink>
      </Link>
      <Link to="/projects">
        <NavLink active={pathname === '/projects'}>
          Projects
        </NavLink>
      </Link>
      <Link to="/links">
        <NavLink active={pathname === '/links'}>
          Links
        </NavLink>
      </Link>
    </NavContainer>
  );
}
                