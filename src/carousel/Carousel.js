import React from 'react';
import {Carousel} from 'react-bootstrap';
import carouselLinks from '../constants/carouselImages.js';
class CarouselComponent extends React.Component {

  listOfCarouselLink(){
    return carouselLinks.map(link =>
      <Carousel.Item>
        <img width={500} height={300} alt="500x300" src={link} />
      </Carousel.Item>
   );
  }

  render() {
    return (
      <div>
        <Carousel>
          {this.listOfCarouselLink()}
        </Carousel>
      </div>
    );
  }
};

export default CarouselComponent;
