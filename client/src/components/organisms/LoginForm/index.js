import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';

import Input from '../../atoms/Input';
import { FormCol } from './styles';

const LoginForm = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    props.login(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormCol>
        <Input label='email' onChange={setEmail} value={email} />
        <Input label='password' onChange={setPassword} value={password} />
        <button>Login</button>
      </FormCol>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
