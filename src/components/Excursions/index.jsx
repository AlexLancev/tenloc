import React from "react";
import { Tours } from "./Tours";
import { useParams } from "react-router-dom";
import { arrDirections } from "../Layout/Header/DropdownMenuDirections/Directions";

import "./style.scss";

const Excursions = () => {
  const { direct } = useParams();
  const currentDirect = arrDirections.find((item) => item.direct === direct);

  return (
    <section className="excursions">
      <div className="container">
        <h2 className="excursions__title">{currentDirect.descriptions}</h2>
        <Tours />
      </div>
    </section>
  );
};

export { Excursions };
