import React, { Component } from 'react';
import { Footer } from '../styled-components/components/footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <h3>Mosaic Fun Tool</h3>
        <h4>Copyright {new Date().getFullYear()}</h4>
        <h4>Contact - (716)450-2362</h4>
        <h4>Salt Lake City, UT</h4>
      </Footer>
    );
  }
}

export default FooterComponent;
