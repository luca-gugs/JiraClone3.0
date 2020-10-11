import styled from 'styled-components';

import { Row, Col } from '../../../utils/GlobalStyles';

export const Holder = styled(Row)`
  /* width: 8rem; */
`;

export const SelectRow = styled(Row)``;

export const ColorButton = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.2rem;
  width: 2.2rem;

  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const NoneButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.2rem;
  width: 3.5;

  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.7rem;
`;

export const Circle = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  background-color: ${props => (props.color ? props.color : 'green')};
  transform: rotate(45deg);
`;

export const Underline = styled.div`
  position: absolute;
  bottom: -0.5rem;
  height: 0.1rem;
  width: 0%;
  background-color: black;
  transition: width 300ms;
  &.active {
    width: 100%;
  }
`;
