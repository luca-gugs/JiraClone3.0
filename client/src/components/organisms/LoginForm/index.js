import React, { useState } from 'react';

import { connect } from 'react-redux';
import { login } from '../../../actions/auth';

import Input from '../../atoms/Input';
import { FormCol } from './styles';
import { FormRow } from '../../../utils/GlobalStyles';

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
        <FormRow style={{ justifyContent: 'center' }}>
          <h2>Login</h2>
        </FormRow>
        <FormRow>
          <Input label='email' onChange={setEmail} value={email} />
        </FormRow>
        <FormRow>
          <Input label='password' onChange={setPassword} value={password} />
        </FormRow>
        <FormRow style={{ justifyContent: 'center' }}>
          <button>Login</button>
        </FormRow>
      </FormCol>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
