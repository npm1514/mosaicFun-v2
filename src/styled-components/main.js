import styled from 'styled-components';

  export const MainWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const MainContent = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    min-height: 300px;
    text-align: center;
  `;

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

  export const MainImage = styled.img`
    margin: auto;
  `;

  export const MosaicOverlay = styled.div`
    margin: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .mosBlock {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.25px solid grey;
      font-size: 75%;
    }
    .mosBlock.hideGrid {
      border: none;
    }
    .mosBlock.hideText {
      color: transparent;
    }
  `;

  export const PrintCanvas = styled.div`
    display: none;
  `;
