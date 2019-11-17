import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Header, LogoImg, NavLink, HeaderOrg, MobileMenu } from '../styled-components/components/header';

class MobileHeader extends Component {
  render(){
    const { mainTool } = this.props;
    return (
      <MobileMenu>
        <NavLink href="/newaccount">
          <Button
            variant="outlined"
            color="primary"
          >Features</Button>
        </NavLink>
        <NavLink href="/newaccount">
          <Button
            variant="outlined"
            color="primary"
          >Get Premium</Button>
        </NavLink>
        {
          !mainTool &&  (
            <Fragment>
              <NavLink href="/main">
                <Button
                  variant="outlined"
                  color="secondary"
                >Try It Out</Button>
              </NavLink>
              <NavLink href="/login">
                <Button
                  variant="outlined"
                  color="primary"
                >Log In</Button>
              </NavLink>
            </Fragment>
          )
        }
      </MobileMenu>
    );
  }
}

export default MobileHeader;
