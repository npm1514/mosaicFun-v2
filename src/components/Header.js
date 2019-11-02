import React, { Component } from 'react';
import { Header, LogoImg } from '../styled-components/header';
import { MainButton, MainInput } from '../styled-components/global';

class HeaderComponent extends Component {
  render(){
    const {gridLines, stateChange, colorText } = this.props;
    return (
      <Header>
        <LogoImg
          src='https://png.pngtree.com/template/20190916/ourlarge/pngtree-letter-n-mosaic-logo-icon-design-template-elements-image_307444.jpg'
        />
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
      </Header>
    );
  }
}

export default HeaderComponent;
