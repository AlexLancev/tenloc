import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

const arrDirections = [
  {
    id: "1",
    direct: "spb",
    descriptions: "Экскурсии в Санкт-Петербурге",
    urlImage: "/img/directions/spb.webp",
  },
  {
    id: "2",
    direct: "kaliningrad",
    descriptions: "Экскурсии в Калининграде",
    urlImage: "/img/directions/kaliningrad.webp",
  },
  {
    id: "3",
    direct: "murmansk",
    descriptions: "Экскурсии в Мурманске",
    urlImage: "/img/directions/murmansk.webp",
  },
  {
    id: "4",
    direct: "stambul",
    descriptions: "Экскурсии в Стамбуле",
    urlImage: "/img/directions/stambul.webp",
  },
  {
    id: "5",
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
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export { Directions, arrDirections };
