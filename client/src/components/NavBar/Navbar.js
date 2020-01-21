import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  Holder,
  HeaderHolder,
  NavHolder,
  Header,
  StyledLink,
  HamburgerMenu
} from './styles';

const Navbar = () => {
  return (
    <Holder>
      <HeaderHolder>
        <Header>Paperback</Header>
      </HeaderHolder>
      <NavHolder>
        <StyledLink>Register</StyledLink>
        <StyledLink>Community</StyledLink>
        <StyledLink>Login</StyledLink>
      </NavHolder>
    </Holder>
  );
};

export default Navbar;
