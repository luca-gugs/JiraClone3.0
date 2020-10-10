import styled from 'styled-components';

import { Row, Col, TransitionButton } from '../../../utils/GlobalStyles';

export const PageFill = styled.div`
  display: none;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  &.active {
    display: flex;
  }
`;

export const NewBoardForm = styled(Col)`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 45rem;
  z-index: 5;
`;

export const Header = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: rgba(255, 250, 250, 0.65);
  z-index: 4;
`;

export const ShowButton = styled(TransitionButton)`
  margin: auto;
`;

export const GoButton = styled(TransitionButton)`
  width: 5rem;
  height: 5rem;
  padding: 0;
  margin: 1rem 0;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
