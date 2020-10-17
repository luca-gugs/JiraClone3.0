import React, { useState } from 'react';

import { connect } from 'react-redux';
import { login } from '../../../actions/auth';

import { SubmitButton } from '../../atoms/Button';
import Input from '../../atoms/Input';
import { FormCol, Header } from './styles';
import { FormRow } from '../../../utils/GlobalStyles';

const PublicLogin = props => {
  const [email, setEmail] = useState('lg2674@nyu.edu');
  const [password, setPassword] = useState('Gosuns98');

  const onSubmit = async e => {
    e.preventDefault();
    props.login(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormCol>
        <FormRow style={{ justifyContent: 'center' }}>
          <Header>Want To Test Out the App Without Registering?</Header>
        </FormRow>
        <FormRow style={{ justifyContent: 'center' }}>
          <SubmitButton style={{ backgroundColor: 'black', color: 'white' }}>
            Try Now
          </SubmitButton>
        </FormRow>
      </FormCol>
    </form>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(PublicLogin);
