import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const arrDirections = [
  {
    direct: "spb",
    descriptions: "Экскурсии в Санкт-Петербурге",
    urlImage: "/img/directions/spb.jpg",
  },
  {
    direct: "kaliningrad",
    descriptions: "Экскурсии в Калининграде",
    urlImage: "/img/directions/kaliningrad.jpg",
  },
  {
    direct: "murmansk",
    descriptions: "Экскурсии в Мурманске",
    urlImage: "/img/directions/murmansk.jpg",
  },
  {
    direct: "stambul",
    descriptions: "Экскурсии в Стамбуле",
    urlImage: "/img/directions/stambul.jpg",
  },
  {
    direct: "oae",
    descriptions: "Экскурсии в ОАЭ",
    urlImage: "/img/directions/oae.jpg",
  },
];

const Directions = () => {
  return (
    <div className="directions">
      <ul className="directions__list">
        {arrDirections &&
          arrDirections.map((item) => {
            return (
              <li
                className="directions__item"
                style={{ backgroundImage: `url(${item.urlImage})` }}
              >
                <Link
                  to={`/excursions/${item.direct}/`}
                  className="directions__link"
                >
                  <h3 className="directions__heading">{item.descriptions}</h3>
                  <b className="directions__number-excursions">
                    <i className="directions__quantity"></i>
                    экскурсии
                  </b>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export { Directions };
