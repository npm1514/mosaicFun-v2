import styled from 'styled-components';

  export const Carousel = styled.div`
    width: 90vw;
    margin: 0 5vw;
    height: 100%;
    margin: auto;
  `;

  export const CarouselSlide = styled.div`
    max-height: 80vh;
    max-width: 90vw;
    display: block;
    position: relative;
    opacity: 1;
    margin: auto;
    transition: opacity 0.8s;
    h1 {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: max-content;
      min-width: 200px;
      padding: 24px;
      font-size: 20px;
      background-color: white;
      opacity: 0.8;
      text-align: center;
      position: absolute;
      height: max-content;
      color: #303030;
      border: 3px solid pink;
      border-radius: 6px;
      white-space: pre-line;
      line-height: 1.5;
    }
    img {
      max-width: 90vw;
      max-height: 80vh;
      height: auto;
    }
  `;
