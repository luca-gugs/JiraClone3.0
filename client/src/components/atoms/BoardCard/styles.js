import styled from 'styled-components';
import Breakpoint from '../../../utils/Breakpoints';
import { Row, Col } from '../../../utils/GlobalStyles';

export const Holder = styled(Col)`
  justify-content: center;
  align-items: center;
  height: 15rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  ${Breakpoint.md} {
  }
  ${Breakpoint.lg} {
    width: 20rem;
  }
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  margin: 0;
`;
