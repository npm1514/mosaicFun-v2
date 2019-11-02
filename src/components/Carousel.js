import React, { Component } from 'react';
import { Carousel, CarouselWrap, CarouselSlide } from '../styled-components/components/carousel';
import content from './utils';

class CarouselComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      slides: [0,3]
    }
  }
  componentDidMount(){
    setInterval(() => {
      let carouselWrap = document.getElementById('carouselWrap');
      console.log(carouselWrap.style.left);
      const { slides } = this.state;
      let fSlide = slides[0];
      let lSlide = slides[1];
      const clength = content.length;
      if(lSlide + 1 > clength){
        fSlide = 0;
        lSlide = 3;
      } else {
        fSlide++;
        lSlide++;
      }
      this.setState({
        slides: [fSlide, lSlide]
      })
    }, 5000)
  }
  render(){
    const { slides } = this.state;
    const showingSlides = content.slice(slides[0], slides[1]);
    console.log(showingSlides);
    return (
      <Carousel>
        <CarouselWrap id="carouselWrap">
          {
            showingSlides.map(a => {
              return (
                <CarouselSlide>
                  <h1
                    style={{
                      fontSize: a.fontSize,
                      color: a.color
                    }}
                  >{a.text}</h1>
                  <img src={a.image}/>
                </CarouselSlide>
              )
            })
          }
        </CarouselWrap>
      </Carousel>
    );
  }
}

export default CarouselComponent;
