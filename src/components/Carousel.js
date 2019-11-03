import React, { Component } from 'react';
import { Carousel, CarouselSlide } from '../styled-components/components/carousel';
import content from './utils';

class CarouselComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      slideIndex: 0
    }
  }
  componentDidMount(){
    for (let i = 0; i < content.length; i++) {
      new Image().src = content.image;
    }
    let carouselSlide = document.getElementById('carouselSlide');
    setInterval(() => {
      carouselSlide.style.opacity = 0;
      setTimeout(() => {
        const { slideIndex } = this.state;
        let newSlideIndex = slideIndex + 2 > content.length ? 0 : slideIndex + 1;
        this.setState({
          slideIndex: newSlideIndex
        })
        carouselSlide.style.opacity = 1;
      }, 800)
    }, 6000);
  }
  render(){
    const { slideIndex } = this.state;
    const slide = content[slideIndex];
    return (
      <Carousel>
        <CarouselSlide id="carouselSlide">
          {
            slide.text && <h1>{slide.text}</h1>
          }
          <img src={slide.image}/>
        </CarouselSlide>
      </Carousel>
    );
  }
}

export default CarouselComponent;
