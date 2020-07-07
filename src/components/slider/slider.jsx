import React, { Component } from 'react';
import Slider from 'react-slick';
import slider1 from '../../img/1.jpg';
import slider2 from '../../img/2.jpg';
import slider3 from '../../img/3.jpg';
import slider4 from '../../img/4.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

export default class SomeSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '50px',
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className='slider'>
        <Slider {...settings}>
          <div className='slider__block'>
            <img
              className='slider__item'
              src={slider1}
              alt='foto_slider'
              width='720px'
              height='540px'
            />
          </div>
          <div>
            <img
              className='slider__item'
              src={slider2}
              alt='foto_slider'
              width='720px'
              height='540px'
            />
          </div>
          <div>
            <img
              className='slider__item'
              src={slider3}
              alt='foto_slider'
              width='720px'
              height='540px'
            />
          </div>
          <div>
            <img
              className='slider__item'
              src={slider4}
              alt='foto_slider'
              width='720px'
              height='540px'
            />
          </div>
        </Slider>
      </div>
    );
  }
}