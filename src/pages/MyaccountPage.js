import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MyaccountWrapper } from '../styled-components/pages/myaccount';
import { MainContent } from '../styled-components/global';

class Myaccount extends Component {
    render(){
      return (
          <MyaccountWrapper>
              <Header/>
              <MainContent>
                myaccount page
              </MainContent>
              <Footer/>
          </MyaccountWrapper>
      );
    }
}

export default Myaccount;
