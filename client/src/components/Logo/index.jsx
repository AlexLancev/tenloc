import React from "react";
import LogoImg from "../../img/logo.webp";
import { NavLink } from "react-router-dom";

import "./style.scss";

const Logo = () => {
  return (
    <NavLink to="/" className="logo">
      <img
        className="logo__img"
        src={LogoImg}
        width={135}
        height={40}
        alt="Логотип компании Tenloc"
        title="Логотип компании Tenloc"
      />
    </NavLink>
  );
};

export { Logo };
