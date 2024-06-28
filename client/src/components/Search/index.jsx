import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
import debounce from "lodash.debounce";

import "./style.scss";

const Search = () => {
  const [arrFilteredSearch, setArrFilteredSearch] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const { planes } = useSelector((state) => state.planes);
  const inputRef = React.useRef();

  const inCloseClear = () => {
    setSearchValue('');
    setArrFilteredSearch([]);
    inputRef.current.focus();
  };

  const debouncedSearch = React.useCallback(
    debounce((value) => {
      if (value.length >= 3) {
        setArrFilteredSearch(
          planes
            ? planes.filter((el) =>
                el.title
                  .toLocaleLowerCase()
                  .includes(value.toLocaleLowerCase())
              )
            : []
        );
      } else {
        setArrFilteredSearch([]);
      }
    }, 700),
    [planes]
  );

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    debouncedSearch(value);
  };

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="search filtered-search">
      <label className="search__label">
        <FiMapPin className="search__btn-icon" size={30} />
        <>
          <input
            ref={inputRef}
            className="search__input"
            type="search"
            placeholder="Выберите направление"
            onChange={handleChange}
            value={searchValue}
          />
          {searchValue && (
            <button type="button" onClick={inCloseClear}>
              <IoIosClose />
            </button>
          )}
        </>
        <button className="search__btn" type="button">
          <CiSearch className="search__btn-icon" size={20} />
          <span className="search__text">Найти</span>
        </button>
      </label>
      <ul className="filtered-search__list">
        {arrFilteredSearch.map((item) => (
          <li key={item.id} className="filtered-search__item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Search };
