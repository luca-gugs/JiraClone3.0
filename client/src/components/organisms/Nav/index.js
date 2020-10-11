import React from 'react';

import { NavBar, Logo, LinksHolder, StyledLink } from './styles';

const Nav = () => {
  return (
    <NavBar>
      <StyledLink to='/dashboard'>
        <Logo>BOARDS</Logo>
      </StyledLink>
      <div>
        <StyledLink to='/login'>Login</StyledLink>
        <StyledLink to='/register'>Sign Up</StyledLink>
      </div>
    </NavBar>
  );
};

export default Nav;
