import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NewaccountWrapper, NewaccountContent } from '../styled-components/pages/newaccount';

class Newaccount extends Component {
    render(){
      return (
          <NewaccountWrapper>
              <Header/>
              <NewaccountContent>
                newaccount page
              </NewaccountContent>
              <Footer/>
          </NewaccountWrapper>
      );
    }
}

export default Newaccount;
