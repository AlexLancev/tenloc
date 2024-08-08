import React from 'react';

import aboutDescriptionBg from '../img/about/about.webp';

import './style.scss';

const AboutDescription = () => {
  return (
    <section className='about-description'>
      <div className='container'>
        <h1 className='about-description__title'>«Tenloc» — это</h1>
        <p className='about-description__text'>
          уникальная платформа для быстрого и легкого бронирования экскурсий на
          русском языке в разных городах нашей страны и мира. В каждом из
          представленных городов мы отобрали топ-10 самых интересных и необычных
          мест для посещения, исходя из мнения туристов и данных независимых
          рейтингов.
        </p>
        <img
          src={aboutDescriptionBg}
          alt='Девушка на фоне гор раскинула руки'
          className='about-description__bg'
        />
      </div>
    </section>
  );
};

export { AboutDescription };
