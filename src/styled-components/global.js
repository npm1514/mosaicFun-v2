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
    min-height: calc(100vh - 93px - 105px - 32px);
    text-align: center;
  `;
//100vh - 93 header - 105 footer - 32 padding
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
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    div {
      width: 100%;
      text-align: center;
    }
    a {
      margin: auto;
    }
    @media (min-width: 580px){
      flex-direction: row;
      div {
        width: 50%;
      }
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

  export const ListItem = styled.li`
    width: max-content;
    margin: auto;
  `;

  export const Unordered = styled.ul`
    width: max-content;
    margin: auto;
  `;

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
    select, option {
      padding: 12px;
      font-size: 18px;
      width: 75px;
      margin: 12px;
    }
    a {
      color: #8a2be2;
    }
    @media (min-width: 432px){
      width: 400px;
    }
  `;
