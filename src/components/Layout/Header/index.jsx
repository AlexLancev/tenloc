import React from 'react';

import { MenuBtn } from 'components/ui/MenuBtn';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { CustomerAssistance } from '../CustomerAssistance';

import { DropdownMenuDirections } from './DropdownMenuDirections';

import './style.scss';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
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
