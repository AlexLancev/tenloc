import React from "react";
import { Hero } from "../../components/Hero";
import { SubscribeMail } from "../../components/SubscribeMail";
import { PopularDestinations } from "../../components/PopularDestinations";
import { PopularTravel } from "../../components/PopularTravel";

const HomePage = () => {
  window.scrollTo(0, 0);
  
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
