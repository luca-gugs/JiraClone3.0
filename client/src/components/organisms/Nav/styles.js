import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TypeBody } from '../../atoms/Typography';
import Breakpoint from '../../../utils/Breakpoints';
import { Row, Col } from '../../../utils/GlobalStyles';

export const NavBar = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 7.2rem;
  width: 100vw;
  padding: 0 4rem;

  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.19);
  background-color: rgba(255, 250, 250, 0.75);
  z-index: 999;
  ${Breakpoint.md} {
    padding: 0 4rem;
    justify-content: space-between;
  }
`;

export const Logo = styled.h2`
  margin: 0;
  font-size: 2.8rem;
  font-weight: 500;
`;

export const LinksHolder = styled(Row)`
  width: auto;
`;

export const CopyText = styled.p`
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: 1.4rem;
  z-index: -1;
`;

export const StyledLink = styled(Link)`
  margin-left: 2rem;
  font-size: 1.8rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
