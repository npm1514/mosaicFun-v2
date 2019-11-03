import styled from 'styled-components';

export const LoginBlock = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  height: max-content;
  margin: auto;
  border: 1px solid #303030;
  border-radius: 4px;
  text-align: center;
  input, button {
    display: block;
    padding: 12px;
    font-size: 18px;
    width: 300px;
    margin: 12px auto;
  }
  a {
    color: #8a2be2;
  }
  @media (min-width: 432px){
    width: 400px;
  }
`;
