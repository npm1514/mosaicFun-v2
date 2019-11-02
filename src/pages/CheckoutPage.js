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
                checkout page
              </MainContent>
              <Footer/>
          </CheckoutWrapper>
      );
    }
}

export default Checkout;
