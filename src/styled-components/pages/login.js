import styled from 'styled-components';

  export const LoginWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const LoginBlock = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    height: max-content;
    text-align: center;
    @media (min-width: 432px){
      width: 400px;
    }
  `;
