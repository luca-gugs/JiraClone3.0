import styled from 'styled-components';

export const Holder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const Left = styled.div`
  width: 50%;
  height: 100vh;
  min-width: 510px;
  display: flex;
  justify-content: center;
  background-color: #3d3b3b;
`;
export const Right = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  min-width: 520px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
  padding-left: 20px;
`;
export const Header = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 200%;
  color: white;
  max-width: 450px;
`;
export const HeaderRight = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 250%;
  margin-right: 15%;
  margin: 0.6rem;
  margin-bottom: 40px;
`;
export const Item = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 200%;
  margin: 0.6rem;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 100%;
  margin-left: 20px;

  width: fit-content;
  &::placeholder {
    color: black;
  }
`;
export const Button = styled.input`
  margin: 15px;
  &:visited,
  &:link,
  &:active,
  &:focus {
    text-decoration: none;
    outline: none;
  }
`;
