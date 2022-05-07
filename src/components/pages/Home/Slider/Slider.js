import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImg1 from '../../../../images/slider/slider1.jpg';
import sliderImg2 from '../../../../images/slider/slider2.jpg';
import sliderImg3 from '../../../../images/slider/slider3.jpg';

const Slider = () => {
      return (
            <Carousel>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={sliderImg1}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3 className="text-uppercase">punch fear in the face</h3>
                              <p>Leverage FitTech to Enhance the Experience</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={sliderImg2}
                              alt="Second slide"
                        />

                        <Carousel.Caption>
                              <h3 className="text-uppercase">i can and i will watch me</h3>
                              <p>Foster Positive Relationships in Your Community</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={sliderImg3}
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h3 className="text-uppercase">train insane or remain same</h3>
                              <p>Foster Positive Relationships in Your Community</p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
};

export default Slider;