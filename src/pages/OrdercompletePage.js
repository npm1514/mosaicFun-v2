import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { OrdercompleteWrapper } from '../styled-components/pages/ordercomplete';
import { MainContent } from '../styled-components/global';

class Ordercomplete extends Component {
    render(){
      return (
          <OrdercompleteWrapper>
              <Header/>
              <MainContent>
                order details
                redirect to logged in main page
              </MainContent>
              <Footer/>
          </OrdercompleteWrapper>
      );
    }
}

export default Ordercomplete;
