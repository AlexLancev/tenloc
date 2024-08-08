import React from 'react';

import { SubscribeMail } from 'components/SubscribeMail';

import { HeroGuide } from './HeroGuide';
import { BecomeGuide } from './BecomeGuide';
import { OfferTour } from './OfferTour';
import { TermsCooperation } from './TermsCooperation';
import { GuideRegistration } from './GuideRegistration';

const GuidePage = () => {
  return (
    <>
      <HeroGuide />
      <BecomeGuide />
      <OfferTour />
      <TermsCooperation />
      <GuideRegistration />
      <SubscribeMail />
    </>
  );
};

export { GuidePage };
