import React from "react";
import { IoSearch } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

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
          <IoSearch className="search__btn-icon" size={30} />
          <span className="search__text">Найти</span>
        </button>
      </label>
    </div>
  );
};

export { Search };
