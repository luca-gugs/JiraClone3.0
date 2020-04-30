import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import { Link, Redirect } from 'react-router-dom';

import styled from 'styled-components';
import Submit from '../assets/submitblack.png';
import PropTypes from 'prop-types';

import Alert from './Alert';

const Holder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  height: 100vh;
  min-width: 510px;
  display: flex;
  justify-content: center;
  background-color: #3d3b3b;
`;
const Right = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  min-width: 520px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 200%;
  color: white;
  max-width: 500px;
  margin-right: 15%;
`;
const HeaderRight = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 250%;
  margin-right: 15%;
  margin: 0.6rem;
  margin-bottom: 40px;
`;
const Item = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 200%;
  margin: 0.6rem;
`;
const Input = styled.input`
  outline: none;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 100%;
  margin-left: 20px;

  width: fit-content;
  &::placeholder {
    color: black;
  }
`;
const Button = styled.input`
  margin: 15px;
  &:visited,
  &:link,
  &:active,
  &:focus {
    text-decoration: none;
    outline: none;
  }
`;

class Register extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state.name)
    );
  };

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password && this.state.password.length < 6) {
      this.props.setAlert('Password Must be 6 charachters', 'danger');
    } else {
      this.props.register(this.state);
      console.log('Success');
    }
    //const newUser = {
    //  name: this.state.name,
    //  email: this.state.email,
    //  password: this.state.password
    //};
    //try {
    //  const config = {
    //    headers: {
    //      "Content-Type": "application/json"
    //    }
    //  };
    //
    //  const body = JSON.stringify(newUser);
    //  const res = await axios.post("/api/users", body, config);
    //  console.log(res.data);
    //} catch (err) {
    //  console.error(err.response.data);
    //}
  };

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
            <HeaderRight>SignUp</HeaderRight>
            <form onSubmit={this.onSubmit}>
              <Item>
                name:
                <Input name='name' onChange={this.handleChange} type='text' />
              </Item>
              <Item>
                email:
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
              <Alert />
            </form>
          </ContentAlign>
        </Right>
      </Holder>
    );
  }
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
