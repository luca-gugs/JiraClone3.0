import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import {
  Holder,
  HeaderHolder,
  NavHolder,
  Header,
  StyledLink,
  StyledA,
  HamburgerMenu,
} from './styles';

const Navbar = (props) => {
  console.log('navbar', props);
  const authLinks = (
    <NavHolder>
      <StyledLink to='/register'>Register</StyledLink>
      <StyledLink to='/profiles'>Community</StyledLink>
      <StyledA onClick={props.logout} href='#!'>
        logout
      </StyledA>
    </NavHolder>
  );
  const guestLinks = (
    <NavHolder>
      <StyledLink to='/register'>Register</StyledLink>
      <StyledLink to='/register'>Community</StyledLink>
      <StyledLink to='/login'>Login</StyledLink>
    </NavHolder>
  );
  return (
    <Holder>
      <HeaderHolder>
        <Header>Paperback</Header>
      </HeaderHolder>
      {!props.auth.loading && (
        <Fragment>
          {props.auth.isAuthenticated ? authLinks : guestLinks}
        </Fragment>
      )}
    </Holder>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
