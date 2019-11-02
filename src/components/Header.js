import React, { Component, Fragment } from 'react';
import { Header, LogoImg } from '../styled-components/header';
import { MainButton, MainInput } from '../styled-components/global';

class HeaderComponent extends Component {
  render(){
    const {gridLines, stateChange, colorText, mainTool } = this.props;
    return (
      <Header>
        <LogoImg
          src='/images/logoNoSlogan.png'
        />
        {
          mainTool && (
            <Fragment>
              <MainButton
                id="restartBtn"
                type="button"
                onClick={() => {window.location.reload()}}
              >Restart</MainButton>
              <span><input
                type="checkbox"
                name="gridLines"
                checked={gridLines}
                value={gridLines}
                onClick={() => {stateChange('gridLines', gridLines)}}
              /> Grid Lines</span>
              <span><input
                type="checkbox"
                name="colorText"
                checked={colorText}
                value={colorText}
                onClick={() => {stateChange('colorText', colorText)}}
              /> Color Numbers</span>
              <MainButton
                id="printBtn"
                type="button"
                onClick={this.props.printImage}
              >Print</MainButton>
            </Fragment>
          )
        }
      </Header>
    );
  }
}

export default HeaderComponent;
