import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginWrapper } from '../styled-components/pages/login';
import { MainContent } from '../styled-components/global';

class Login extends Component {
    render(){
      return (
          <LoginWrapper>
              <Header/>
              <MainContent>
                login page
              </MainContent>
              <Footer/>
          </LoginWrapper>
      );
    }
}

export default Login;
