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
                user information
                subscription details
                saved images
              </MainContent>
              <Footer/>
          </MyaccountWrapper>
      );
    }
}

export default Myaccount;
