import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Menu = ({ isOpen }) => {
  return (
    <nav className={`menu ${isOpen ? "active" : ""}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink to="/about" className="menu__link">
            О сервисе
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/blog" className="menu__link">
            Блог
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/guide" className="menu__link">
            Стать гидом
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
