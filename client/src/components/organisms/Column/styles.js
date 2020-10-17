import styled from 'styled-components';
import { Col, Row } from '../../../utils/GlobalStyles';

export const Holder = styled(Col)`
  position: relative;
  height: 80vh;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #fbfbff;
  width: 25rem;
  min-width: 25rem;
  margin: 0 2rem;
`;

export const HeaderRow = styled(Row)`
  /* font-weight: 500; */
  /* font-size: 4rem; */
  border-bottom: 1px solid #3b3b3b;
  justify-content: space-between;
  align-items: center;
  min-height: 4.9rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const Header = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 2.6rem;
`;

export const CardList = styled.div`
  padding: 1.5rem;
  transition: background-color 0.5s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : null)};
`;
