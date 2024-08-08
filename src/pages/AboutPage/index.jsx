import React from 'react';

import { BlogPreview } from 'components/BlogPreview';

import { SubscribeMail } from 'components/SubscribeMail';

import { AboutDescription } from './AboutDescription';
import { FastConvenient } from './FastConvenient';
import { ListingBenefits } from './ListingBenefits';
import { HowWork } from './HowWork';

const AboutPage = () => {
  return (
    <>
      <AboutDescription />
      <FastConvenient />
      <ListingBenefits />
      <HowWork />
      <div className='container'>
        <BlogPreview />
      </div>
      <SubscribeMail />
    </>
  );
};

export { AboutPage };
