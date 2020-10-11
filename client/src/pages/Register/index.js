import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import RegisterForm from '../../components/organisms/RegisterForm';

const Register = props => {
  if (props.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return <RegisterForm />;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Register);
