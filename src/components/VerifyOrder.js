import React, { Component } from 'react';
import { OrderList } from '../styled-components/pages/checkout';

class VerifyOrder extends Component {
    render(){
      const { email, firstName, lastName, creditCardNum, expMonth, expYear, cvv, submitOrder } = this.props;
      return (
        <OrderList>
          <h1>Review Order</h1>
          <hr/>
          <h2>Email: {email}</h2>
          <h2>Name: {firstName} {lastName}</h2>
          <h2>Credit Card Number: ************{creditCardNum.slice(12)}</h2>
          <h2>Expiration Date: {expMonth} / {expYear}</h2>
          <h2>CVV: {cvv}</h2>
          <h2>Price: <strong>$19.99</strong></h2>
          <h2>Subscription Length: <strong>1 year</strong></h2>
          <button onClick={submitOrder}>Submit Order</button>
        </OrderList>
      );
    }
}

export default VerifyOrder;
