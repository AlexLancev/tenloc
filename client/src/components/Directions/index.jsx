import React from "react";
import SpbBg from "../../img/directions/spb.jpg";
import KaliningradBg from "../../img/directions/kaliningrad.jpg";
import MurmanskBg from "../../img/directions/murmansk.jpg";
import StambulBg from "../../img/directions/stambul.jpg";
import OaeBg from "../../img/directions/oae.jpg";

import "./style.scss";

const Directions = () => {

  const anotherPage = () => {
    // navigate(`/${}`);
  }

  return (
    <div className="directions">
      <ul className="directions__list">
        <li
          className="directions__item"
          style={{ backgroundImage: `url(${SpbBg})` }}
        >
          <a onClick={anotherPage} className="directions__link" href="/">
            <h3 className="directions__heading">
              Экскурсии в Санкт-Петербурге
            </h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li
          className="directions__item"
          style={{ backgroundImage: `url(${KaliningradBg})` }}
        >
          <a className="directions__link" href="/">
            <h3 className="directions__heading">Экскурсии в Калининграде</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li
          className="directions__item"
          style={{ backgroundImage: `url(${MurmanskBg})` }}
        >
          <a className="directions__link" href="/">
            <h3 className="directions__heading">Экскурсии в Мурманске</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li
          className="directions__item"
          style={{ backgroundImage: `url(${StambulBg})` }}
        >
          <a className="directions__link" href="/">
            <h3 className="directions__heading">Экскурсии в Стамбуле</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
        <li
          className="directions__item"
          style={{ backgroundImage: `url(${OaeBg})` }}
        >
          <a className="directions__link" href="/">
            <h3 className="directions__heading">Экскурсии в ОАЭ</h3>
            <b className="directions__number-excursions">
              <i className="directions__quantity"></i>
              экскурсии
            </b>
          </a>
        </li>
      </ul>
    </div>
  );
};

export { Directions };
