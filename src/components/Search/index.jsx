import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search">
      <label className="search__label">
        <input className="search__input" type="search" />
        <button className="search__btn" type="button">
          <IoSearch className="search__btn-icon" size={30} />
        </button>
      </label>
    </div>
  );
};

export { Search };
