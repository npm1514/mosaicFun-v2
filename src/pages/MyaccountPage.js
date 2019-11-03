import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MainContent, MainWrapper } from '../styled-components/global';

class Myaccount extends Component {
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                user information
                subscription details
                saved images
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Myaccount;
