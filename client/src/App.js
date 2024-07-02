import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "./paths";
import { Excursions } from "./components/Excursions";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { PromoPage } from "./components/PromoPage";
import { Guide } from "./components/Guide";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${paths.home}`} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`${paths.excursions}`} element={<Excursions />} />
          <Route path={`${paths.excursion}`} element={<PromoPage />} />
          <Route path={`${paths.guide}`} element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
