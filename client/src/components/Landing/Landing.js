import React from 'react';

import {
  Holder,
  Left,
  Right,
  Content,
  Header,
  SubHeader,
  Btn,
  StyledLink
} from './styles';

export const Landing = () => {
  return (
    <Holder>
      <Left>
        <Content>
          <Header>
            <StyledLink to='/'>Paperback</StyledLink>
          </Header>
          <SubHeader>A minimalist social experience</SubHeader>
        </Content>
      </Left>
      <Right>
        <Content>
          <Btn>
            <StyledLink to='/login'>SignIn</StyledLink>
          </Btn>
          <Btn>
            <StyledLink to='/register'>SignUp</StyledLink>
          </Btn>
        </Content>
      </Right>
    </Holder>
  );
};

export default Landing;
