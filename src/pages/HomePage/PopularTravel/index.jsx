import React from 'react';
import { Link } from 'react-router-dom';

import { BlogPreview } from 'components/BlogPreview';
import { paths } from 'paths';

import './style.scss';

const PopularTravel = () => {
  return (
    <section className='popular-travel'>
      <div className='container'>
        <div className='popular-travel__inner'>
          <h2 className='popular-travel__title'>Популярные путешествия</h2>
          <Link to={`${paths.blogPage}`} className='popular-travel__link'>
            Блог
          </Link>
        </div>
        <div className='popular-travel__content'>
          <BlogPreview />
        </div>
      </div>
    </section>
  );
};

export { PopularTravel };
