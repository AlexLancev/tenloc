import React from 'react';

import HeroBg from 'img/hero-bg.webp';

import { ExcursionList } from './ExcursionList';
import { Search } from './Search';

import './style.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div
          className='hero__inner'
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <h2 className='hero__title decor-title'>
            Поиск и бронирование экскурсий
          </h2>
          <h3 className='hero__description'>
            Экскурсии и частные гиды в России и за рубежом
          </h3>
          <Search />
          <ExcursionList />
        </div>
      </div>
    </section>
  );
};

export { Hero };
