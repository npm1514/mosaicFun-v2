import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MainWrapper, MainContent } from '../styled-components/global';

class Newaccount extends Component {
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                Features
                Purchase Premium Account
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Newaccount;
