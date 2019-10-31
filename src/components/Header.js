import React, { Component } from 'react';
import { Header } from '../styled-components/header';
import { MainButton, MainInput } from '../styled-components/global';


class HeaderComponent extends Component {
  render(){
    const {gridLines, stateChange, colorText } = this.props;
    return (
      <Header>
        <img
          height='50'
          width='50'
          src='https://png.pngtree.com/template/20190916/ourlarge/pngtree-letter-n-mosaic-logo-icon-design-template-elements-image_307444.jpg'
        />
        <MainButton
          id="restartBtn"
          type="button"
          onClick={() => {window.location.reload()}}
        >Restart</MainButton>
        <input
          type="radio"
          name="gridLines"
          checked={gridLines}
          value={gridLines}
          onClick={() => {stateChange('gridLines', gridLines)}}
        /> Grid Lines
        <input
          type="radio"
          name="colorText"
          checked={colorText}
          value={colorText}
          onClick={() => {stateChange('colorText', colorText)}}
        /> Color Numbers
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
