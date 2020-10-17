import styled from 'styled-components';
import { Row as RW, Col } from '../../../utils/GlobalStyles';

export const SettingsButton = styled.img`
  position: absolute;
  object-fit: contain;
  height: 2.5rem;
  width: 2.5rem;
  right: 0.5rem;
  bottom: 0;
  margin-bottom: 0.25rem;
  cursor: pointer;
`;

export const SettingsColumn = styled(Col)`
  position: absolute;
  bottom: 3rem;
  right: -4.5rem;

  width: auto;
  background-color: white;
  transform: scale(0);
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.35);
  z-index: 999;
  transition: transform 300ms;
  &.active {
    transform: scale(1);
  }
`;

export const ItemRow = styled(RW)`
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 1.5rem;
  :hover {
    background-color: #e4e4e4;
  }
  cursor: pointer;
`;
