import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Holder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const Left = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Right = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #3d3b3b;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 5rem;
`;
export const SubHeader = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 100%;
`;

export const Btn = styled.div`
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 150%;
  width: 150%;
  margin: 2rem;
  padding: 1rem;
  text-align: center;
  border-radius: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
