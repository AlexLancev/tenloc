import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

import "./style.scss";

const Search = () => {
  return (
    <div className="search">
      <label className="search__label">
        <FiMapPin className="search__btn-icon" size={30} />
        <input
          className="search__input"
          type="search"
          placeholder="Выберите направление"
        />
        <button className="search__btn" type="button">
          <CiSearch className="search__btn-icon" size={20} />
          <span className="search__text">Найти</span>
        </button>
      </label>
    </div>
  );
};

export { Search };
