import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginBlock } from '../styled-components/pages/login';
import { MainWrapper, MainContent } from '../styled-components/global';

class Login extends Component {
    submitSignOn = () => {
      console.log("log on");
    }
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                <LoginBlock>
                  <form onSubmit={this.submitSignOn}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Sign In</button>
                  </form>
                  <a href="/newaccount">No login? Create Account</a>
                </LoginBlock>
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Login;
