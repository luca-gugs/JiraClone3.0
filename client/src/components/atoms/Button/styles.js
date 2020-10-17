import styled from 'styled-components';

export const BaseHoverButton = styled.button`
  padding: 0.8rem 2.1rem;

  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  font-size: 1.8rem;
  letter-spacing: 3px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;

  transition: border-color 400ms, box-shadow 400ms;

  :hover {
    border: 1px solid white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const BaseSubmitButton = styled.button`
  padding: 0.8rem 2.1rem;

  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  font-size: 1.8rem;
  letter-spacing: 3px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
`;
