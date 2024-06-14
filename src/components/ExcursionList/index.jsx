import React from "react";

const ExcursionList = () => {
  return (
    <ul className="excursion-list">
      <li className="excursion-list__item">
        <a href="/" className="excursion-list__link">
          Экскурсии в Санкт-Петербурге
        </a>
      </li>
      <li className="excursion-list__item">
        <a href="/" className="excursion-list__link">
          Экскурсии в Калининграде
        </a>
      </li>
      <li className="excursion-list__item">
        <a href="/" className="excursion-list__link">
          Экскурсии в Мурманске
        </a>
      </li>
      <li className="excursion-list__item">
        <a href="/" className="excursion-list__link">
          Экскурсии в Стамбуле
        </a>
      </li>
      <li className="excursion-list__item">
        <a href="/" className="excursion-list__link">
          Экскурсии в ОАЭ
        </a>
      </li>
    </ul>
  );
};

export { ExcursionList };
