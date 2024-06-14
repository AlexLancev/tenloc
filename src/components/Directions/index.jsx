import React from "react";
import SpbBg from "../../img/directions/spb.jpg";
import KaliningradBg from "../../img/directions/kaliningrad.jpg";
import MurmanskBg from "../../img/directions/murmansk.jpg";
import StambulBg from "../../img/directions/stambul.jpg";
import OaeBg from "../../img/directions/oae.jpg";

const Directions = () => {
  return (
    <section className="directions">
      <ul className="directions__list">
        <li className="directions__item">
          <a
            className="directions__link"
            href="/"
            style={{ backgroundImage: `url(${SpbBg})` }}
          >
            <h3 className="directions__heading">
              Экскурсии в Санкт-Петербурге
            </h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li className="directions__item">
          <a
            className="directions__link"
            href="/"
            style={{ backgroundImage: `url(${KaliningradBg})` }}
          >
            <h3 className="directions__heading">Экскурсии в Калининграде</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li className="directions__item">
          <a
            className="directions__link"
            href="/"
            style={{ backgroundImage: `url(${MurmanskBg})` }}
          >
            <h3 className="directions__heading">Экскурсии в Мурманске</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li className="directions__item">
          <a
            className="directions__link"
            href="/"
            style={{ backgroundImage: `url(${StambulBg})` }}
          >
            <h3 className="directions__heading">Экскурсии в Стамбуле</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li className="directions__item">
          <a
            className="directions__link"
            href="/"
            style={{ backgroundImage: `url(${OaeBg})` }}
          >
            <h3 className="directions__heading">Экскурсии в ОАЭ</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
      </ul>
    </section>
  );
};

export { Directions };
