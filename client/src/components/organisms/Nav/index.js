import React, { useEffect, useState, useLocation } from 'react';
import { connect } from 'react-redux';

import { NavBar, Logo, LinksHolder, StyledLink, CopyText } from './styles';

const Nav = ({ auth }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <NavBar>
      <StyledLink style={{ margin: '0rem' }} to='/dashboard'>
        <Logo>BOARDS</Logo>
      </StyledLink>
      {width > 768 && <CopyText>A Simple Tool For Task Managment</CopyText>}
      <div style={{ width: '15rem' }}>
        <StyledLink to='/login'>Login</StyledLink>
        <StyledLink to='/register'>Sign Up</StyledLink>
      </div>
    </NavBar>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  boards: state.boards,
});

export default connect(mapStateToProps)(Nav);
