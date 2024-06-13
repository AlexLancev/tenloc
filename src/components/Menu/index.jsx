import React from "react";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="/" className="menu__link">
            О сервисе
          </a>
        </li>
        <li className="menu__item">
          <a href="/" className="menu__link">
            Блог
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
