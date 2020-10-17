import styled from 'styled-components';

import { Row, Col } from '../../../utils/GlobalStyles';

export const Holder = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

export const SubmitIcon = styled.img`
  object-fit: contain;
  height: 1.5rem;
  width: 1.5rem;
  transition: transform 400ms;
  :hover {
    transform: scale(1.2);
  }

  cursor: pointer;
`;
