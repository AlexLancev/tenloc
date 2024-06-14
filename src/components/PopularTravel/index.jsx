import React from "react";
import { BlogPreview } from "../BlogPreview";

const PopularTravel = () => {
  return (
    <section className="popular-travel">
      <div className="container">
        <div className="popular-travel__inner">
          <h2 className="popular-travel__title">Популярные путешествия</h2>
          <a href="/" className="popular-travel__link">
            В блог
          </a>
        </div>
        <BlogPreview />
      </div>
    </section>
  );
};

export { PopularTravel };
