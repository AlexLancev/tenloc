import React from "react";
import HeroGuideBg from "../../../img/guide/guide.webp";

import "./style.scss";

const HeroGuide = () => {
  return (
    <section className="hero-guide">
      <div className="container">
        <div
          className="hero-guide__inner"
          style={{ backgroundImage: `url(${HeroGuideBg})` }}
        >
          <div className="hero-guide__box">
            <h1 className="hero-guide__title decor-title">Станьте гидом нашего сервиса</h1>
            <p className="hero-guide__text">
              Вам нравится наш сервис и вам тоже есть чем поделиться с гостями
              вашего города? Станьте нашим гидом – мы открыты к вашим
              предложениям! Кто может стать нашим гидом? Если вы влюблены в свой
              город, инициативны и доброжелательны, если вы хороший рассказчик,
              вам есть что показать гостям и вы знаете, как это сделать, добро
              пожаловать в наши ряды!
            </p>
            <a className="hero-guide__link" href="#form">
              Стать гидом
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroGuide };
