import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

const Search = () => {
  const { planes, isLoading } = useSelector((state) => state.planes);

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











// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { FiMapPin } from "react-icons/fi";
// import { IoIosClose } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { searchCounter } from "../../store/search/reducer";
// import debounce from "lodash.debounce";

// import "./style.scss";

// const Search = () => {
//   const [value, setValue] = React.useState('');
//   const inputRef = React.useRef();
//   const dispatch = useDispatch();
  
//   const inCloseClear = () => {
//     setValue('');
//     dispatch(searchCounter(''));
//     inputRef.current.focus();
//   };

//   const debouncedSearchValue = React.useCallback(
//     debounce((value) => {
//       dispatch(searchCounter(value));
//     }, 700),
//     [dispatch]
//   );

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setValue(value);
//     debouncedSearchValue(value);
//   };

//   return (
//     <div className="search">
//       <label className="search__label">
//         <FiMapPin className="search__btn-icon" size={30} />
//         <input
//           ref={inputRef}
//           onChange={handleChange}
//           className="search__input"
//           type="search"
//           placeholder="Выберите направление"
//           value={value}
//         />
//          {value && (
//         <button
//           onClick={inCloseClear}
//           type="button"
//           className="search__btn-close"
//         >
//           <IoIosClose size={20} fill="#464646" className="search__icon" />
//         </button>
//       )}
//         <button className="search__btn" type="button" onClick={() => inputRef.current.focus()}>
//           <CiSearch className="search__btn-icon" size={20} />
//           <span className="search__text">Найти</span>
//         </button>
//       </label>
//     </div>
//   );
// };

// export { Search };

