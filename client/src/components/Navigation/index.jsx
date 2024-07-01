import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ plane }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to={`/`} className="navigation__link">Главная страница</Link>
        </li>
        <li className="navigation__item">
          <Link
            to={`/excursions/${plane.name.current}`}
            className="navigation__link"
          >
            {`Экскурсии в ${plane.name.sity}`}
          </Link>
        </li>
        <li className="navigation__item">
          <span className="navigation__link">{plane.title}</span>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
