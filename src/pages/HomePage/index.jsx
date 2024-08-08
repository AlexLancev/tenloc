import React from 'react';

import { SubscribeMail } from 'components/SubscribeMail';

import { Hero } from './Hero';
import { PopularDestinations } from './PopularDestinations';
import { PopularTravel } from './PopularTravel';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <PopularTravel />
      <SubscribeMail />
    </>
  );
};

export { HomePage };
