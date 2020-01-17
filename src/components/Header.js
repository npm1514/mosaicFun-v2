import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Header, LogoImg, NavLink, HeaderOrg } from '../styled-components/components/header';
import MenuIcon from '@material-ui/icons/Menu';

import MobileHeader from './MobileHeader';

class HeaderComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      menuOpen: false,
      loggedIn: false
    }
  }
  openMenu = () => {
    let val = this.state.menuOpen ? false : true;
    this.setState({
      menuOpen: val
    })
    if(val) document.body.addEventListener('click', this.closeMenu);
  }
  closeMenu = (e) => {
    if(e.target.id != "MenuIcon"){
      this.setState({
        menuOpen: false
      })
      document.body.removeEventListener('click', this.closeMenu);
    }
  }
  render(){
    const {gridLines, stateChange, colorText, mainTool } = this.props;
    const { menuOpen,loggedIn } = this.state;
    return (
      <Header>
        <NavLink href="/">
          <LogoImg src='/images/logoNoSlogan.png'/>
        </NavLink>
        <HeaderOrg>
          <span>
            <NavLink href="/newaccount">
              <Button
                variant="outlined"
                color="primary"
              >Features</Button>
            </NavLink>
            <NavLink href="/checkout">
              <Button
                variant="outlined"
                color="primary"
              >Get Premium</Button>
            </NavLink>
          </span>
          <span>
            {
              !mainTool &&
              <NavLink href="/main">
                <Button
                  variant="outlined"
                  color="secondary"
                >Try It Out</Button>
              </NavLink>
            }
            {
              loggedIn ?
              <Button
                variant="outlined"
                color="primary"
              >Log Out</Button>
              :
              <NavLink href="/login">
                <Button
                  variant="outlined"
                  color="primary"
                >Log In</Button>
              </NavLink>
            }
          </span>
        </HeaderOrg>
        <MenuIcon
          onClick={this.openMenu}
          id="MenuIcon"
          fontSize="large"
        />
        { menuOpen && <MobileHeader mainTool={mainTool}/>}
      </Header>
    );
  }
}

export default HeaderComponent;
