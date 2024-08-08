import React from 'react';
import { useParams } from 'react-router-dom';

import { arrDirections } from 'components/Layout/Header/DropdownMenuDirections/Directions';

import { Tours } from './Tours';

import './style.scss';

const Excursions = () => {
  const { direct } = useParams();
  const currentDirect = arrDirections.find((item) => item.direct === direct);

  return (
    <section className='excursions'>
      <div className='container'>
        <h2 className='excursions__title'>{currentDirect.descriptions}</h2>
        <Tours />
      </div>
    </section>
  );
};

export { Excursions };
