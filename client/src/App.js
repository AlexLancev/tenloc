// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SubscribeMail } from "./components/SubscribeMail";
import { PopularDestinations } from "./components/PopularDestinations";
import { Hero } from "./components/Hero";
import { PopularTravel } from "./components/PopularTravel";
import { paths } from "./paths";

import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "./store/planes/planesSlice";

function App() {

  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <PopularDestinations />
      <PopularTravel />
      <SubscribeMail />
      <Footer />
    </div>
  );
}

export default App;
