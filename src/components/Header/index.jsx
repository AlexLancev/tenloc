import React from "react";
import { Logo } from "../Logo";
import { DropdownMenuDirections } from "../DropdownMenuDirections";
import { Menu } from "../Menu";
import { CustomerAssistance } from "../CustomerAssistance";
import { MenuBtn } from "../ui/MenuBtn";

import "./style.scss";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <DropdownMenuDirections />
          <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
          <CustomerAssistance />
          <MenuBtn setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};

export { Header };
