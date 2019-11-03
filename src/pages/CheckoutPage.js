import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MainWrapper, MainContent } from '../styled-components/global';

class Checkout extends Component {
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                money information
                log on
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Checkout;
