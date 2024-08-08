import React from 'react';
import { NavLink } from 'react-router-dom';

import { bodyScroll } from 'utils/body-scroll';

import './style.scss';

const Menu = ({ isOpen, setIsOpen }) => {
  const navRef = React.useRef(null);

  if (isOpen) {
    navRef.current.addEventListener('click', (e) => {
      const menuLink = e.target.closest('.menu__link');
      if (menuLink) {
        setIsOpen(!menuLink);
        bodyScroll.unLock();
      }
    });
  }

  return (
    <nav className={`menu ${isOpen ? 'active' : ''}`} ref={navRef}>
      <ul className='menu__list'>
        <li className='menu__item'>
          <NavLink to='/about' className='menu__link'>
            О сервисе
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/blog' className='menu__link'>
            Блог
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/guide' className='menu__link'>
            Стать гидом
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
