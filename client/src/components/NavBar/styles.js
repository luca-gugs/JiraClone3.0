import styled from 'styled-components';

import { Link } from 'react-router-dom';
export const Holder = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f9f9f9;
  margin: 0px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderHolder = styled.div`
  display: flex;
  margin: 0 3rem;
  @media (max-width: 768px) {
    height: 100px;
  }
`;
export const NavHolder = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

export const HamburgerMenu = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Header = styled.h2`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 300%;
  margin: auto;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    font-size: 300%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  margin: 1.5rem;
  font-size: 1.5rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  &:visited,
  &:link,
  &:active {
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin: 0.5rem 1.5rem;
    font-size: 1rem;
  }
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  margin: 1.5rem;
  font-size: 1.5rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  &:visited,
  &:link,
  &:active {
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin: 0.5rem 1.5rem;
    font-size: 1rem;
  }
`;
