import styled, { keyframes } from 'styled-components';

const shrink = (props) => {
  var val = Math.random();
  return keyframes`
  0% {
    height: ${(val * 5) + 35}px;
    width: ${(val * 5) + 35}px;
    top: ${props.top}%;
    left: ${props.left}%;
  }

  50% {
    height: ${(val * 25) + 5}px;
    width: ${(val * 25) + 5}px;
    top: ${props.top + (45 - (val * 25))/2}%;
    left: ${props.left + (45 - (val * 25))/2}%;
  }

  100% {
    height: ${(val * 5) + 35}px;
    width: ${(val * 5) + 35}px;
    top: ${props.top}%;
    left: ${props.left}%;
  }
`};

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
    display: block;
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
    min-height: calc(100vh - 93px - 103px - 32px - 100px);
    text-align: center;
  `;

  export const SubHeader = styled.div`
    width: 100%;
    height: auto;
    padding: 16px 0;
    text-align: center;
    button {
      margin: 8px;
    }
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

  export const LoadingDiv = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
    margin: auto;
  `;
  export const LoadingSquare = styled.div`
    box-sizing: border-box;
    border: 1ps solid #8d8d8d;
    position: absolute;
    height: 0;
    width: 0;
    border-radius: 4px;
    background-color: ${props => props.color};
    animation: ${props => shrink(props)} 4s linear infinite;
  `;
