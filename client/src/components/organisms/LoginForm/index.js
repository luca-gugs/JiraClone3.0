import React, { useState } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { login } from '../../../actions/auth';

import Input from '../../atoms/Input';
import { FormCol, Header } from './styles';
import { FormRow } from '../../../utils/GlobalStyles';

const LoginForm = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    props.login(email, password);
  };

  const onGoogleAuth = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.get('/api/auth/google');
      console.log(res, 'res');
    } catch (err) {
      console.error(err.response, 'err');
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <FormCol>
        <FormRow style={{ justifyContent: 'center' }}>
          <Header>Login</Header>
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
        <div>
          <a
            href='http://localhost:7808/api/auth/google'
            class='btn red darken-1'
          >
            <i class='fab fa-google left'></i> Log In With Google
          </a>
          <a href='/api/auth/google' class='btn red darken-1'>
            <i class='fab fa-google left'></i> Log In With Google
          </a>

          <button onClick={onGoogleAuth}>Log In With Google</button>
        </div>
      </FormCol>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
