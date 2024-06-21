import React from "react";
import { Logo } from "../Logo";
import { DropdownMenuDirections } from "../DropdownMenuDirections";
import { Menu } from "../Menu";
import { CustomerAssistance } from "../CustomerAssistance";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <DropdownMenuDirections />
          <Menu />
          <CustomerAssistance />
        </div>
      </div>
    </header>
  );
};

export { Header };
