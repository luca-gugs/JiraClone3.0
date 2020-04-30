import React from 'react';
import styled from 'styled-components';
import Submit from '../../assets/submitblack.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import {
  Holder,
  Left,
  Content,
  Header,
  Right,
  ContentAlign,
  HeaderRight,
  Item,
  Input,
  Button,
} from './styles';

class Login extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  // Redirect if logged in

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <Holder>
        <Left>
          <Content>
            <Header>
              A social network that isn’t made by people who steal your data and
              have bad haircuts.
            </Header>
          </Content>
        </Left>
        <Right>
          <ContentAlign>
            <HeaderRight>SignIn</HeaderRight>
            <form onSubmit={this.onSubmit}>
              <Item>
                email:{' '}
                <Input name='email' onChange={this.handleChange} type='text' />
              </Item>
              <Item>
                password:{' '}
                <Input
                  name='password'
                  onChange={this.handleChange}
                  type='text'
                />
              </Item>
              <Button
                type='image'
                name='submit'
                src={Submit}
                width='67'
                height='51'
              />
            </form>
          </ContentAlign>
        </Right>
      </Holder>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
