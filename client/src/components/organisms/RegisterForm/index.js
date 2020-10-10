import React, { useState } from 'react';

import { connect } from 'react-redux';
import { register } from '../../../actions/auth';

import Input from '../../atoms/Input';
import { FormCol } from './styles';
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
          <h2>Sign Up</h2>
        </FormRow>
        <FormRow>
          <Input label='name' onChange={setName} value={name} />
        </FormRow>
        <FormRow>
          <Input label='email' onChange={setEmail} value={email} />
        </FormRow>
        <FormRow>
          <Input label='password' onChange={setPassword} value={password} />
        </FormRow>
        <FormRow style={{ justifyContent: 'center' }}>
          <button type='submit'>Register</button>
        </FormRow>
      </FormCol>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(RegisterForm);
