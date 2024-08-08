import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.scss';

const Navigation = ({ plane }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <Link to={`/`} className='navigation__link'>
            Главная страница
          </Link>
        </li>
        {plane.name ? (
          <li className='navigation__item'>
            <button
              onClick={goBack}
              title='Вернуться назад'
              className='navigation__link'
            >
              {`Экскурсии в ${plane.name.sity}`}
            </button>
          </li>
        ) : (
          <li className='navigation__item'>
            <Link to={`/blog`} className='navigation__link'>
              Блог
            </Link>
          </li>
        )}
        {plane.title && (
          <li className='navigation__item'>
            <span className='navigation__link'>{plane.title}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { Navigation };
