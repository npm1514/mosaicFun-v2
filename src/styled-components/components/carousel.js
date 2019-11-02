import styled from 'styled-components';

  export const Carousel = styled.div`
    width: 90vw;
    margin: 0 5vw;
    height: 100%;
    position: relative;
    overflow: visible;
  `;
  export const CarouselWrap = styled.div`
    width: max-content;
    height: max-content;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    left: 0;
  `;

  export const CarouselSlide = styled.div`
    width: 90vw;
    display: block;
    position: relative;
    h1 {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      position: absolute;
      height: max-content;
    }
  `;
