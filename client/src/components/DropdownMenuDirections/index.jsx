import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { arrDirections } from "../Directions";

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
          className={`drop-directions__icon arrow-icon ${isVisible ? "arrow-icon--visible" : ""
            }`}
          size={20}
        />
      </button>
      {isVisible && arrDirections && (
        <ul className="drop-directions__list">
          {arrDirections.map((direction) => (
            <li key={direction.id} className="drop-directions__item">
              <Link to={`/excursions/${direction.direct}`} className="drop-directions__link">
                {direction.descriptions}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { DropdownMenuDirections };
