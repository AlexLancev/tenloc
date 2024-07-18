import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getblogArticle } from "../../store/blogArticle/reducer";
import { BlogPreview } from "../BlogPreview";
import { Navigation } from "../Navigation";

import "./style.scss";

const BlogPagePresentation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blogArticleArr, isLoading } = useSelector((state) => state.article);

  React.useEffect(() => {
    dispatch(getblogArticle(id));
  }, [dispatch, id]);

  if (isLoading || !blogArticleArr) {
    return;
  }

  const { description } = blogArticleArr;

  return (
    <div className="container">
      <Navigation plane={blogArticleArr} />
      <div
        className="blog-page"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <div className="blog-page__inner">
        <BlogPreview />
      </div>
    </div>
  );
};

export { BlogPagePresentation };
