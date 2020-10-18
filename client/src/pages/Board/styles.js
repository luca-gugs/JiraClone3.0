import styled from 'styled-components';
import { Row, PageWrapper } from '../../utils/GlobalStyles';

export const StyledRow = styled(Row)`
  flex-wrap: nowrap;
  overflow: scroll;
  padding: 1rem 3rem;
  width: auto;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;
