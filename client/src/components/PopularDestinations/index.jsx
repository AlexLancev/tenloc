import React from "react";
import { Directions } from "../Directions";

import "./style.scss";

const PopularDestinations = () => {
  return (
    <section className="popular-destinations">
      <div className="container">
        <h2 className="popular-destinations__title">Популярные направления</h2>
        <p className="popular-destinations__text">
          Проводим индивидуальные и групповые экскурсии на русском языке
        </p>
        <Directions />
      </div>
    </section>
  );
};

export { PopularDestinations };
