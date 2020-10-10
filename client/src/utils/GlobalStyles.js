import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormRow = styled(Row)`
  margin: 1rem 0;
`;

export const PageWrapper = styled.div`
  padding: 9rem 1rem 0 1rem;
  box-sizing: border-box;
`;

export const TransitionButton = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 0.6em;
  color: black;
  cursor: pointer;

  display: flex;
  margin: 2.5rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  color: black;
  outline: 0;
  border-color: black;
  background-image: -webkit-linear-gradient(
    45deg,
    #f1c40f 50%,
    transparent 50%
  );
  background-image: linear-gradient(45deg, black 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out, color 300ms;
  :hover {
    background-position: 0;
    color: white;
  }
`;
