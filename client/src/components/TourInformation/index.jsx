import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaRubleSign } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const TourInformation = () => {
  return (
    <div className="container">
      <ul className="tour-information">
        <li className="tour-information__item">
          <FaCarAlt className="tour-information__icon" size={20} />
          <span className="tour-information__text">
            Индивидуальная, на автомобиле
          </span>
        </li>
        <li className="tour-information__item">
          <CiStopwatch className="tour-information__icon" size={20} />
          <span className="tour-information__text">4-5 часов</span>
        </li>
        <li className="tour-information__item">
          <span className="tour-information__text">
            <FaBusAlt className="tour-information__icon" size={20} />
            <span>
              Размер группы 1-3 человека на авто, 4-6 человек на минивене
            </span>
          </span>
        </li>
        <li className="tour-information__item">
          <FaRubleSign className="tour-information__icon" size={20} />
          <span className="tour-information__text">
            Бесплатная отмена за 48 часов до даты экскурсии
          </span>
        </li>
        <li className="tour-information__item">
          <IoPeople className="tour-information__icon" size={20} />
          <span className="tour-information__text">Мини группа</span>
        </li>
      </ul>
    </div>
  );
};

export { TourInformation };
