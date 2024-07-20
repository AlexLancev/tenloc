import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { getBlog } from "../../store/blog/reducer";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ToursLoader } from "../Loader/toursLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

const BlogPreview = ({ isSlider = true }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blogArr, isLoading } = useSelector((state) => state.blog);
  const arrBlogItem = blogArr.length > 0
    ? blogArr.filter((blogItem) => blogItem._id !== id)
    : [];
    const settings = {
      arrows: true,
      autoplay: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 451,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

  React.useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  const renderBlogItem = (blogItem) => {
    const key = uuidv4();
    return (
      <li className="blog-preview__item" key={key}>
        <Link to={`/blog/${blogItem._id}`}>
          <img
            width={337}
            height={250}
            src={`/${blogItem.image}`}
            alt={blogItem.title}
            className="blog-preview__img"
          />
        </Link>
        <time className="blog-preview__date" dateTime="2023-11-08T07:14">
          {blogItem.date}
        </time>
        <h3 className="blog-preview__heading">{blogItem.title}</h3>
        <Link to={`/tenloc/blog/${blogItem._id}`} className="blog-preview__link">
          <span className="blog-preview__link-text">Читать</span>
          <BsThreeDots className="blog-preview__icon" size={10} />
        </Link>
      </li>
    );
  };

  return isSlider ? (
    <Slider {...settings} className="blog-preview__list">
      {arrBlogItem && arrBlogItem.map((blogItem) => renderBlogItem(blogItem))}
    </Slider>
  ) : (
    <ul className="blog-preview__list">
      {isLoading || !arrBlogItem
        ? Array.from({ length: arrBlogItem && arrBlogItem.length }).map(() => {
            const key = uuidv4();
            return <ToursLoader key={key} />;
          })
        : arrBlogItem.map((blogItem) => renderBlogItem(blogItem))}
    </ul>
  );
};

export { BlogPreview };
