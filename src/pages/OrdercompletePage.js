import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { OrdercompleteWrapper, OrdercompleteContent } from '../styled-components/pages/ordercomplete';

class Ordercomplete extends Component {
    render(){
      return (
          <OrdercompleteWrapper>
              <Header/>
              <OrdercompleteContent>
                ordercomplete page
              </OrdercompleteContent>
              <Footer/>
          </OrdercompleteWrapper>
      );
    }
}

export default Ordercomplete;
