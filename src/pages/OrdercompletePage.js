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
                ordercomplete page
              </MainContent>
              <Footer/>
          </OrdercompleteWrapper>
      );
    }
}

export default Ordercomplete;
