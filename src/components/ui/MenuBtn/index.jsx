import React from "react";
import { bodyScroll } from "../../../utils/body-scroll";

import "./style.scss";

const MenuBtn = ({setIsOpen, isOpen}) => {
  const { toggle } = bodyScroll;

  const handleClick = () => {
    toggle();
    setIsOpen(!isOpen);
  }
  
  return (
    <button
      onClick={handleClick}
      className={`burger ${isOpen ? "active" : ""}`}
      type="button"
      aria-label="Меню открыть/закрыть"
    >
      <span className="burger-line"></span>
    </button>
  );
};

export { MenuBtn };
