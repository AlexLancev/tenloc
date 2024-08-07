import React from "react";
import { AboutDescription } from "./AboutDescription";
import { FastConvenient } from "./FastConvenient";
import { ListingBenefits } from "./ListingBenefits";
import { HowWork } from "./HowWork";
import { BlogPreview } from "../../components/BlogPreview";
import { SubscribeMail } from "../../components/SubscribeMail";

const AboutPage = () => {
  return (
    <>
      <AboutDescription />
      <FastConvenient />
      <ListingBenefits />
      <HowWork />
      <div className="container">
        <BlogPreview />
      </div>
      <SubscribeMail />
    </>
  );
};

export { AboutPage };
