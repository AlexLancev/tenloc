import React from "react";
import { HeroGuide } from "../HeroGuide";
import { BecomeGuide } from "../BecomeGuide";
import { OfferTour } from "../OfferTour";
import { TermsCooperation } from "../TermsCooperation";
import { GuideRegistration } from "../GuideRegistration";
import { SubscribeMail } from "../SubscribeMail";

const Guide = () => {
  window.scrollTo(0, 0);
  
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

export { Guide };
