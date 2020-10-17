import styled from 'styled-components';
import Breakpoint from '../../utils/Breakpoints';
import { PageWrapper as PW } from '../../utils/GlobalStyles';

export const Divider = styled.div`
  display: none;

  height: 50rem;
  margin: 0 10rem;
  width: 1px;
  background-color: #3b3b3b;
  ${Breakpoint.lg} {
    display: flex;
    margin: 0 4rem;
  }
`;

export const PageWrapper = styled(PW)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${Breakpoint.lg} {
    justify-content: center;
    flex-direction: row;
  }
`;
