import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getblogId } from "../../../store/blogId/reducer";
import { BlogPreview } from "../BlogPreview";
import { Navigation } from "../../../components/Navigation";

import "./style.scss";

const BlogPagePresentation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blogIdArr, isLoading } = useSelector((state) => state.blogId);

  React.useEffect(() => {
    dispatch(getblogId(id));
  }, [dispatch, id]);

  if (isLoading || !blogIdArr) {
    return;
  }

  const { description } = blogIdArr;

  return (
    <div className="container">
      <Navigation plane={blogIdArr} />
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
