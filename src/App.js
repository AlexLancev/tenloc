import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { paths } from "./paths";
import { Excursions } from "./components/Excursions";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PromoPage } from "./components/Excursions/PromoPage";
import { GuidePage } from "./pages/GuidePage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPagePresentation } from "./pages/BlogPage/BlogPagePresentation";
import { useDispatch } from "react-redux";
import { getTours } from "./store/tours/toursSlice";
import { getBlog } from "./store/blog/reducer";
import { AboutPage } from "./pages/AboutPage";

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTours());
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={`${paths.home}`} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`${paths.excursions}`} element={<Excursions />} />
          <Route path={`${paths.excursion}`} element={<PromoPage />} />
          <Route path={`${paths.guide}`} element={<GuidePage />} />
          <Route path={`${paths.aboutPage}`} element={<AboutPage />} />
          <Route path={`${paths.blogPage}`} element={<BlogPage />} />
          <Route path={`${paths.blogId}`} element={<BlogPagePresentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
