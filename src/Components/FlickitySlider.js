import React from 'react';
import Flickity from 'react-flickity-component';
import './flickity.css';

const flickityOptions = {
  initialIndex: 0,
  //   prevNextButtons: false,
  pageDots: false,
  cellAlign: 'center',
  wrapAround: true,
  //   asNavFor: '.carousel-nav',
  fullScreen: true,
};

const FlickitySlider = ({ image }) => (
  <Flickity
    className="carousel" // default ''
    elementType="div" // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static // default false
  >
    {image && image.map((item, index) => (
      <img className="carousel-cell" src={item} alt={`img ${index}`} />
    ))}
  </Flickity>
);

export default FlickitySlider;
