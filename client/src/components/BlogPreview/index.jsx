import React from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { getBlog } from "../../store/blog/reducer";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../../paths";

import "./style.scss";

const BlogPreview = () => {
  const { blogArr, isLoading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <ul className="blog-preview__list">
      {blogArr &&
        blogArr.map((item) => {
          return (
            <li className="blog-preview__item">
              <Link to={`blog/${item._id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="blog-preview__img"
                />
              </Link>
              <time className="blog-preview__date" dateTime="2023-11-08T07:14">
                {item.date}
              </time>
              <h3 className="blog-preview__heading">{item.title}</h3>
              <Link to={`blog/${item._id}`} className="blog-preview__link">
                <span className="blog-preview__link-text">Читать</span>
                <BsThreeDots className="blog-preview__icon" size={10} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export { BlogPreview };
