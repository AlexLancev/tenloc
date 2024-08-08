import React from "react";
import { HeroGuide } from "./HeroGuide";
import { BecomeGuide } from "./BecomeGuide";
import { OfferTour } from "./OfferTour";
import { TermsCooperation } from "./TermsCooperation";
import { GuideRegistration } from "./GuideRegistration";
import { SubscribeMail } from "../../components/SubscribeMail";

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
