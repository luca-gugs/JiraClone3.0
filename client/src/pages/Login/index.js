import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import LoginForm from '../../components/organisms/LoginForm';
import PublicLogin from '../../components/organisms/PublicLogin';
import { Divider, PageWrapper } from './styles';

const Login = props => {
  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <PageWrapper
      style={{
        minHeight: '90vh',
      }}
    >
      <LoginForm />
      <Divider />
      <PublicLogin />
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
