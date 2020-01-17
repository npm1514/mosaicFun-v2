import React, { Component } from 'react';
import { Header, Footer , CheckoutForm, VerifyOrder } from '../components';
import { MainWrapper, MainContent, LoginBlock } from '../styled-components/global';

class Checkout extends Component {
    state = {
      email: "",
      password1: "",
      password2: "",
      firstName: "",
      lastName: "",
      creditCardNum: "",
      expMonth: "01",
      expYear: (new Date().getFullYear()).toString(),
      cvv: "",
      review: false,
      displayMessage: ""
    }
    submitPurchaseRequest = () => {
      const { password1, password2, creditCardNum, cvv } = this.state;
      let good = true;
      let message = "";
      if(password1 != password2){
        good = false;
        message += "Passwords do not match!\n";
      }
      if(creditCardNum.length != 16){
        good = false;
        message += "Invalid Credit Card Number!\n";
      }
      if(cvv.length != 3){
        good = false;
        message += "Invalid CVV Number!\n";
      }
      if(message){
        this.setState({ displayMessage: message })
      }
      if(good){
        console.log("Purchase request", this.state);
        this.setState({review: true});
        window.scrollTo(0,0);
      }
    }
    submitOrder = () => {
      console.log("submit order", this.state);
    }
    stateChange = (prop, val) => {
      this.setState({
        [prop]: val,
        displayMessage: ""
      })
    }

    render(){

      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                {
                  !this.state.review ?
                  <CheckoutForm
                    {...this.state}
                    stateChange={this.stateChange}
                    submitPurchaseRequest={this.submitPurchaseRequest}
                  /> :
                  <VerifyOrder
                    {...this.state}
                    submitOrder={this.submitOrder}
                  />
                }
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Checkout;
