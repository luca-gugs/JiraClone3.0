import styled from 'styled-components';
import { Col, Row } from '../../../utils/GlobalStyles';

export const CardHolder = styled(Col)`
  box-sizing: border-box;
  position: relative;
  background-color: white;
  min-height: 10rem;
  margin: 1rem 0;
  padding: 1rem;
  /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15); */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const HeaderRow = styled(Row)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
export const BodyRow = styled(Row)`
  margin-bottom: 1.5rem;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  object-fit: contain;
  height: 2rem;
  width: 2rem;
  right: 0;
  bottom: 0;
  margin-bottom: 0.25rem;
  cursor: pointer;
`;
