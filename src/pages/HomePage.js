import React, { Component } from 'react';
import { Header, Footer, Carousel } from '../components';
import { MainWrapper, MainContent } from '../styled-components/global';

class Home extends Component {
    render(){
      return (
          <MainWrapper>
              <Header/>
              <MainContent>
                <Carousel/>
              </MainContent>
              <Footer/>
          </MainWrapper>
      );
    }
}

export default Home;
