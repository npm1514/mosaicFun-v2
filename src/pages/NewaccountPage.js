import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Header, Footer } from '../components';
import { MainWrapper, MainContent, SplitContent, ListItem, Unordered } from '../styled-components/global';
import { NavLink } from '../styled-components/components/header';

class Newaccount extends Component {
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                <SplitContent>
                  <div>
                    <h3>Features</h3>
                    <Unordered>
                      <ListItem>Save and Print</ListItem>
                      <ListItem>Add/Remove Grid Lines</ListItem>
                      <ListItem>Add/Remove Paint By Number</ListItem>
                      <ListItem>Change Block Colors</ListItem>
                      <ListItem>Control Color Quality</ListItem>
                      <ListItem>Control Division Count</ListItem>
                    </Unordered>
                  </div>
                  <div>
                    <h3>
                      Subscribe to Premium for $19.99 Anually
                    </h3>
                    <NavLink href="/checkout">
                      <Button
                        variant="outlined"
                        color="primary"
                      >Purchase Now</Button>
                    </NavLink>
                  </div>
                </SplitContent>
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Newaccount;
