import React from "react";
import { SliderGallery } from "../SliderGallery";
import { TourInformation } from "../TourInformation";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="container">
        <SliderGallery />
        <TourInformation />
      </div>
    </div>
  );
};

export { Presentation };
