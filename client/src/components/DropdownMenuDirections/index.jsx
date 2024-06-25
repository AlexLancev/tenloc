import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./style.scss";

const DropdownMenuDirections = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="drop-directions">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="drop-directions__btn-arrow"
        type="button"
      >
        <b className="drop-directions__head">Направления</b>
        <MdKeyboardArrowDown
          className={`drop-directions__icon arrow-icon ${
            isVisible ? "arrow-icon--visible" : ""
          }`}
          size={20}
        />
      </button>
      {isVisible && (
        <ul className="drop-directions__list">
          <li className="drop-directions__item">
            <a href="/" className="drop-directions__link">
              Экскурсии в Санкт-Петербурге
            </a>
          </li>
          <li className="drop-directions__item">
            <a href="/" className="drop-directions__link">
              Экскурсии в Калининграде
            </a>
          </li>
          <li className="drop-directions__item">
            <a href="/" className="drop-directions__link">
              Экскурсии в Мурманске
            </a>
          </li>
          <li className="drop-directions__item">
            <a href="/" className="drop-directions__link">
              Экскурсии в Стамбуле
            </a>
          </li>
          <li className="drop-directions__item">
            <a href="/" className="drop-directions__link">
              Экскурсии в ОАЭ
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export { DropdownMenuDirections };
