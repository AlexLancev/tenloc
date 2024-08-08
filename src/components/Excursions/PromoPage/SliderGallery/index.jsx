import React from "react";
import Slider from "react-slick";

import "./style.scss";

const SliderGallery = ({ arrImages }) => {
  const settings = {
    arrow: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="slider-gallery">
      <Slider {...settings}>
        {arrImages &&
          arrImages.map((image, index) => {
            
            return (
              <img
                src={`/${image}`}
                loading="lazy"
                className="slider-gallery__img"
                alt=""
                key={index}
              />
            );
          })}
      </Slider>
    </section>
  );
};

export { SliderGallery };
