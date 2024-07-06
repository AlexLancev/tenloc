import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getblogArticle } from "../../store/blogArticle/reducer";

const BlogPagePresentation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blogArticleArr, isLoading } = useSelector((state) => state.article);

  React.useEffect(() => {
    dispatch(getblogArticle(id));
  }, [dispatch, id]);

  if (isLoading || !blogArticleArr) {
    return <div>Loading...</div>;
  }

  const { description } = blogArticleArr;

  return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
};

export { BlogPagePresentation };
