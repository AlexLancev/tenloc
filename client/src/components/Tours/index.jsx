import React from "react";
import { LuPlus } from "react-icons/lu";

const Tours = () => {
  return (
    <ul className="tours__list">
      <li className="tours__item">
        <a href="/" className="tours__img-link">
          <img className="tours__img" src="" alt="" />
        </a>
        <div className="tours__box">
          <h3 className="tours__heading">
            Коллекция Эрмитажа и парадная жизнь Зимнего дворца
          </h3>
          <p className="tours__text">
            Двухчасовая экскурсия по Эрмитажу в мини-группе — история Зимнего
            дворца и шедевры мастеров Западной Европы.
          </p>
          <div className="prices-reservation">
            <div className="prices-reservation__details">
              <span className="prices-reservation__price"></span>&#8381;
              <i className="prices-reservation__quantity">/ за человека</i>
            </div>
            <a href="/" className="tours__link">
              <LuPlus className="tours__link-icon" size={30} />
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export { Tours };
