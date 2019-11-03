import React, { Component } from 'react';
import { Footer } from '../styled-components/components/footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        <h3>Mosaic Transformation Tool - © {new Date().getFullYear()} Mosaic Fun</h3>
        <h4>Contact - (716)450-2362 - Salt Lake City, UT</h4>
      </Footer>
    );
  }
}

export default FooterComponent;
