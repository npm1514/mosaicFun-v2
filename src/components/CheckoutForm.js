import React, { Component } from 'react';
import { LoginBlock } from '../styled-components/global';

class CheckoutForm extends Component {
    render(){
      const { email, password1, password2, firstName, lastName, creditCardNum, expMonth, expYear, cvv, stateChange, submitPurchaseRequest, displayMessage } = this.props;
      return (
        <LoginBlock>
          <h2>Account Information</h2>
          <hr/>
          <input
            required
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => {stateChange("email", e.target.value)}}
          />
          <input
            required
            value={password1}
            type="password"
            placeholder="Password"
            onChange={(e) => {stateChange("password1", e.target.value)}}
          />
          <input
            required
            value={password2}
            type="password"
            placeholder="Repeat Password"
            onChange={(e) => {stateChange("password2", e.target.value)}}
          />
          <input
            required
            value={firstName}
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) => {stateChange("firstName", e.target.value)}}
          />
          <input
            required
            value={lastName}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => {stateChange("lastName", e.target.value)}}
          />
          <h2>Credit Card Information</h2>
          <hr/>
          <input
            required
            value={creditCardNum}
            type="text"
            name="creditCardNum"
            placeholder="Credit Card Number"
            onChange={(e) => {stateChange("creditCardNum", e.target.value)}}
          />
          <label>Expiration Date</label>
          <select
            name="expMonth"
            required
            value={expMonth}
            onChange={(e) => {stateChange("expMonth", e.target.value)}}
          >
            {
              [...Array(12)].map((a,i) => {
                const adder = i + 1 > 9 ? "" : "0";
                const monthNum = i + 1;
                const month = adder + monthNum;
                return <option key={i} value={month}>{month}</option>
              })
            }
          </select>/
          <select
            name="expYear"
            required
            value={expYear}
            onChange={(e) => {stateChange("expYear", e.target.value)}}
          >
            {
              [...Array(10)].map((a,i) => {
                const year = (new Date().getFullYear() + i).toString();
                return <option key={i} value={year}>{year}</option>
              })
            }
          </select>
          <input
            required
            value={cvv}
            type="text"
            name="cvv"
            placeholder="CVV"
            onChange={(e) => {stateChange("cvv", e.target.value)}}
          />
          <h3 style={{color: "red"}}>{displayMessage}</h3>
          <button onClick={submitPurchaseRequest}>Review Order</button>
          <a href="/login">Already Have an Account? Login</a>
        </LoginBlock>
      );
    }
}

export default CheckoutForm;
