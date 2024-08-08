import React from 'react';
import { Link } from 'react-router-dom';

import { arrDirections } from 'components/Layout/Header/DropdownMenuDirections/Directions';

import './style.scss';

const ExcursionList = () =>
  arrDirections && (
    <ul className='excursion-list'>
      {arrDirections.map((direction) => (
        <li className='excursion-list__item' key={direction.id}>
          <Link
            to={`/excursions/${direction.direct}`}
            className='excursion-list__link'
          >
            {direction.descriptions}
          </Link>
        </li>
      ))}
    </ul>
  );

export { ExcursionList };
