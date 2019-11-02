import React, { Component } from 'react';
import { Header, LogoImg, NavLink, HeaderOrg } from '../styled-components/components/header';
import { MainButton, MainInput } from '../styled-components/global';

class HeaderComponent extends Component {
  render(){
    const {gridLines, stateChange, colorText, mainTool } = this.props;
    return (
      <Header>
        <NavLink href="/"><LogoImg
          src='/images/logoNoSlogan.png'
        /></NavLink>
        {
          !mainTool && (
            <HeaderOrg>
              <span>
                <NavLink href="/newaccount">Features</NavLink>
                <NavLink href="/newaccount">Upgrade</NavLink>
              </span>
              <span>
                <NavLink href="/main">Try It Out</NavLink>
                <NavLink href="/login">Log In</NavLink>
              </span>
            </HeaderOrg>
          )
        }
        {
          mainTool && (
            <HeaderOrg>
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
            </HeaderOrg>
          )
        }
      </Header>
    );
  }
}

export default HeaderComponent;
