import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';

import Input from '../../atoms/Input';
import { HoverButton } from '../../atoms/Button';
import { FormCol, Header } from './styles';
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
        <Header>Login</Header>
        <FormRow>
          <Input
            label='Email'
            name='email'
            type='text'
            onChange={setEmail}
            value={email}
          />
        </FormRow>
        <FormRow>
          <Input
            label='Password'
            name='password'
            type='password'
            onChange={setPassword}
            value={password}
          />
        </FormRow>
        <FormRow style={{ justifyContent: 'center' }}>
          <HoverButton>SUBMIT</HoverButton>
        </FormRow>
      </FormCol>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
