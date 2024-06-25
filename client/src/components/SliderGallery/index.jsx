import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

const SliderGallery = ({ arrImages }) => {
  const settings = {
    arrow: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="slider-gallery">
      <Slider {...settings}>
        {arrImages &&
          arrImages.map((image) => {
            const key = uuidv4();
            return (
              <img
                src={image}
                loading="lazy"
                className="slider-gallery__img"
                alt=""
                key={key}
              />
            );
          })}
      </Slider>
    </section>
  );
};

export { SliderGallery };
