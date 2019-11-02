import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { NewaccountWrapper } from '../styled-components/pages/newaccount';
import { MainContent } from '../styled-components/global';

class Newaccount extends Component {
    render(){
      return (
          <NewaccountWrapper>
              <Header/>
              <MainContent>
                newaccount page
              </MainContent>
              <Footer/>
          </NewaccountWrapper>
      );
    }
}

export default Newaccount;
