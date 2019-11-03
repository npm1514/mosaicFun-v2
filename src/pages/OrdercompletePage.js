import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MainContent, MainWrapper } from '../styled-components/global';

class Ordercomplete extends Component {
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                order details
                redirect to logged in main page
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Ordercomplete;
