import styled from 'styled-components';

  export const MainForm = styled.form`
    text-align: center;
    margin-bottom: 20px;
  `;

  export const MainInput = styled.input`
    width: 300px;
    padding: 16px;
    font-size: 24px;
    font-family: 'Oswald';
    text-align: center;
    border: 1px solid grey;
    margin: 24px auto;
    display: block;
  `;
  export const MainButton = styled.button`
    width: 300px;
    padding: 16px;
    font-size: 24px;
    font-family: 'Oswald';
    text-align: center;
    border: 1px solid grey;
    margin: 24px auto;
    display: none;
    opacity: 0.5;
    margin: 10px auto;
  `;

  export const MainWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const MainContent = styled.div`
    width: 100%;
    padding: 16px 0;
    min-height: calc(100vh - 93px - 103px - 32px);
    text-align: center;
  `;

  export const SplitContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    div {
      width: 50%;
    }
  `;
