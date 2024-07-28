import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "./paths";
import { Excursions } from "./components/Excursions";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { PromoPage } from "./components/PromoPage";
import { Guide } from "./components/Guide";
import { BlogPage } from "./components/BlogPage";
import { BlogPagePresentation } from "./components/BlogPagePresentation";
import { useDispatch } from "react-redux";
import { getPlanes } from "./store/planes/planesSlice";
import { AboutPage } from "./components/AboutPage";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${paths.home}`} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`${paths.excursions}`} element={<Excursions />} />
          <Route path={`${paths.excursion}`} element={<PromoPage />} />
          <Route path={`${paths.guide}`} element={<Guide />} />
          <Route path={`${paths.aboutPage}`} element={<AboutPage />} />
          <Route path={`${paths.blogPage}`} element={<BlogPage />} />
          <Route path={`${paths.blogId}`} element={<BlogPagePresentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;