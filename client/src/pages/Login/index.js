import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import LoginForm from '../../components/organisms/LoginForm';

const Login = props => {
  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return <LoginForm />;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);