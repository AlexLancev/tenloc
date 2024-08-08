import React from 'react';

import FastConvenientBg from '../img/about/bg.webp';

import './style.scss';

const FastConvenient = () => {
  return (
    <section
      className='fast-convenient'
      style={{ backgroundImage: `url(${FastConvenientBg})` }}
    >
      <div className='container'>
        <div className='fast-convenient__inner'>
          <h2 className='fast-convenient__title'>Быстро и удобно</h2>
          <p className='fast-convenient__text'>
            Вы выбираете экскурсию легко и просто. Наша задача – обеспечить
            комфорт не только во время экскурсии, но на любом этапе
            взаимодействия с нашим сервисом. Выбор экскурсии – это уже само по
            себе увлекательное путешествие, знакомство с вашими возможностями и
            отзывами тех, кто уже воспользовался.
          </p>
          <p className='fast-convenient__text'>
            Бронирование происходит быстро и гладко: для этого не придется
            переходить на площадки туристических агентств, связываться с гидами
            или покидать платформу. Все, что вам понадобится, это указать ваши
            контакты и принять подготовленные документы на электронную почту или
            в мессенджер.
          </p>
        </div>
      </div>
    </section>
  );
};

export { FastConvenient };
