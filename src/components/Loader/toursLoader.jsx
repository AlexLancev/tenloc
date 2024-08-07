import React from "react";
import ContentLoader from "react-content-loader";

import "./style.scss";

const ToursLoader = () => {
  return (
    <ContentLoader
      speed={2}
      className="tours__loader"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="253" />
      <rect x="0" y="273" rx="10" ry="10" width="100%" height="40" />
      <rect x="0" y="333" rx="10" ry="10" width="100%" height="140" />
      <rect x="0" y="503" rx="10" ry="10" width="30%" height="40" />
      <circle cx="93%" cy="518" r="25" />
    </ContentLoader>
  );
};

export { ToursLoader };
