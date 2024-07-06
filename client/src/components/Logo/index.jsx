import React from "react";
import LogoImg from "../../img/logo.webp";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img
        className="logo__img"
        src={LogoImg}
        width={135}
        height={40}
        alt="Логотип компании Tenloc"
        title="Логотип компании Tenloc"
      />
    </a>
  );
};

export { Logo };
