import React from "react";
import { AboutDescription } from "../AboutDescription";
import { FastConvenient } from "../FastConvenient";
import { ListingBenefits } from "../ListingBenefits";
import { HowWork } from "../HowWork";
import { BlogPreview } from "../BlogPreview";
import { SubscribeMail } from "../SubscribeMail";

const AboutPage = () => {
  return (
    <>
      <AboutDescription />
      <FastConvenient />
      <ListingBenefits />
      <HowWork />
      <BlogPreview />
      <SubscribeMail />
    </>
  );
};

export { AboutPage };
