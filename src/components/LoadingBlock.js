import React, { Component } from 'react';
import { LoadingDiv, LoadingSquare } from '../styled-components/global';

class LoadingBlock extends Component {

  render(){
    return (
      <LoadingDiv>
        <LoadingSquare
          color="#fc7b7b"
          top={0}
          left={0}
        />
        <LoadingSquare
          color="#64a1ff"
          top={0}
          left={50}
        />
        <LoadingSquare
          color="#80f9b7"
          top={50}
          left={0}
        />
        <LoadingSquare
          color="#fcc989"
          top={50}
          left={50}
        />
      </LoadingDiv>
    );
  }
}

export default LoadingBlock;
