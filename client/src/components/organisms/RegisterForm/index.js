import React, { useState } from 'react';

import { connect } from 'react-redux';
import { register } from '../../../actions/auth';

import Input from '../../atoms/Input';
import { HoverButton } from '../../atoms/Button';

import { FormCol, Header } from './styles';
import { FormRow } from '../../../utils/GlobalStyles';

const RegisterForm = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    props.register({ name, email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormCol>
        <FormRow style={{ justifyContent: 'center' }}>
          <Header>Sign Up</Header>
        </FormRow>
        <FormRow>
          <Input label='Name' onChange={setName} value={name} />
        </FormRow>
        <FormRow>
          <Input label='Email' onChange={setEmail} value={email} />
        </FormRow>
        <FormRow>
          <Input label='Password' onChange={setPassword} value={password} />
        </FormRow>
        <FormRow style={{ justifyContent: 'center' }}>
          <HoverButton type='submit'>SIGN UP</HoverButton>
        </FormRow>
      </FormCol>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterForm);
