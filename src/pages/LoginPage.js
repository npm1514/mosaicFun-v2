import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MainWrapper, MainContent, LoginBlock } from '../styled-components/global';

class Login extends Component {
    state = {
      email: "",
      password: ""
    }
    submitSignOn = (e) => {
      const { email, password } = this.state;
      e.preventDefault()
      console.log("log on", email, password);
    }
    stateChange = (prop, val) => {
      this.setState({[prop]: val})
    }
    render(){
      console.log(this.state);
      const { email, password } = this.state;
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                <LoginBlock>
                  <form onSubmit={this.submitSignOn}>
                    <input
                      value={email}
                      type="email"
                      placeholder="email"
                      onChange={(e) => {this.stateChange("email", e.target.value)}}
                    />
                    <input
                      value={password}
                      type="password"
                      placeholder="password"
                      onChange={(e) => {this.stateChange("password", e.target.value)}}
                    />
                    <button type="submit">Sign In</button>
                  </form>
                  <a href="/checkout">No login? Create Account</a>
                </LoginBlock>
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Login;
