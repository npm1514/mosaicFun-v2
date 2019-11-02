import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginWrapper, LoginBlock } from '../styled-components/pages/login';
import { MainContent } from '../styled-components/global';

class Login extends Component {
    submitSignOn = () => {
      console.log("log on");
    }
    render(){
      return (
          <LoginWrapper>
              <Header/>
              <MainContent>
                <LoginBlock>
                  <a>Create Account</a>
                  <form onSubmit={this.submitSignOn}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Sign In</button>
                  </form>
                </LoginBlock>
              </MainContent>
              <Footer/>
          </LoginWrapper>
      );
    }
}

export default Login;
