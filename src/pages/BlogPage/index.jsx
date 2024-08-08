import React from 'react';

import { BlogPreview } from 'components/BlogPreview';

import './style.scss';

const BlogPage = () => {
  const [isSlider, setIsSlider] = React.useState(false);

  React.useEffect(() => {
    setIsSlider(false);
  }, [isSlider]);

  return (
    <section className='blog'>
      <div className='container'>
        <h1 className='blog__title'>Блог</h1>
        <p className='blog__text'>
          Платформа простого и надежного онлайн бронирования экскурсий на
          русском языке по всему миру. Был основан в 2012 году в
          Санкт-Петербурге.
        </p>
        <BlogPreview isSlider={isSlider} />
      </div>
    </section>
  );
};

export { BlogPage };
