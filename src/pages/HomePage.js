import React, { Component } from 'react';
import { Header, Footer, Carousel } from '../components';
import { HomeWrapper } from '../styled-components/pages/home';
import { MainContent } from '../styled-components/global';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
              <Header/>
              <MainContent>
                <Carousel/>
              </MainContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
