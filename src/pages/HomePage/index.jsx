import React from "react";
import { Hero } from "./Hero";
import { SubscribeMail } from "../../components/SubscribeMail";
import { PopularDestinations } from "./PopularDestinations";
import { PopularTravel } from "./PopularTravel";

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
