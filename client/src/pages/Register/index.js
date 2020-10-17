import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import RegisterForm from '../../components/organisms/RegisterForm';
import PublicLogin from '../../components/organisms/PublicLogin';

import { PageWrapper, Divider } from './styles';
const Register = props => {
  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <PageWrapper style={{ minHeight: '90vh' }}>
      <RegisterForm />
      <Divider />
      <PublicLogin />
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Register);
