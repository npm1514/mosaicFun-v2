import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { CheckoutWrapper } from '../styled-components/pages/checkout';
import { MainContent } from '../styled-components/global';

class Checkout extends Component {
    render(){
      return (
          <CheckoutWrapper>
              <Header/>
              <MainContent>
                money information
                log on 
              </MainContent>
              <Footer/>
          </CheckoutWrapper>
      );
    }
}

export default Checkout;
