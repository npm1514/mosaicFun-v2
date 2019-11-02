import React, { Component } from 'react';
import { Header, Footer, Carousel } from '../components';
import { HomeWrapper, HomeContent } from '../styled-components/pages/home';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
              <Header/>
              <HomeContent>
                <Carousel/>
              </HomeContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
