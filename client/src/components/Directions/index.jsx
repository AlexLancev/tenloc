import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

const arrDirections = [
  {
    direct: "spb",
    descriptions: "Экскурсии в Санкт-Петербурге",
    urlImage: "/img/directions/spb.webp",
  },
  {
    direct: "kaliningrad",
    descriptions: "Экскурсии в Калининграде",
    urlImage: "/img/directions/kaliningrad.webp",
  },
  {
    direct: "murmansk",
    descriptions: "Экскурсии в Мурманске",
    urlImage: "/img/directions/murmansk.webp",
  },
  {
    direct: "stambul",
    descriptions: "Экскурсии в Стамбуле",
    urlImage: "/img/directions/stambul.webp",
  },
  {
    direct: "oae",
    descriptions: "Экскурсии в ОАЭ",
    urlImage: "/img/directions/oae.webp",
  },
];

const Directions = () => {
  return (
    <div className="directions">
      <ul className="directions__list">
        {arrDirections &&
          arrDirections.map((item) => {
            const key = uuidv4();
            return (
              <li
                key={key}
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

export { Directions, arrDirections };
