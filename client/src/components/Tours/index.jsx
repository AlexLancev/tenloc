import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LuPlus } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPlanes } from "../../store/planes/planesSlice";
import { ToursLoader } from "../Loader/toursLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const Tours = ({ isSlider = false }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  const { direct, id } = useParams();
  const { planes, isLoading } = useSelector((state) => state.planes);
  const arrDirect = planes
    ? planes.filter(
        (plane) => plane.name.current === direct && plane._id !== id
      )
    : [];

  const settings = {
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  window.scrollTo(0, 0);

  const renderTourItem = (plane) => {
    const key = uuidv4();
    return (
      <li className="tours__item" key={key}>
        <Link
          to={`/tenloc/excursion/${direct}/${plane._id}`}
          className="tours__img-link"
        >
          <img
            className="tours__img"
            width={337}
            height={253}
            src={`/${plane.images[0]}`}
            alt={plane.title}
          />
        </Link>
        <div className="tours__box">
          <h3 className="tours__heading">{plane.title}</h3>
          <p className="tours__text">{plane.presentation}</p>
          <div className="prices-reservation">
            <div className="prices-reservation__details">
              <span className="prices-reservation__price">
                {`от ${plane.prices[0]}`} &#8381;
              </span>
              <i className="prices-reservation__quantity">
                {` / за ${plane.typeExcursion.personally} `}
              </i>
            </div>
            <Link to={`/tenloc/excursion/${direct}/${plane._id}`} className="tours__link">
              <LuPlus className="tours__link-icon" size={20} />
            </Link>
          </div>
        </div>
      </li>
    );
  };

  return isSlider ? (
    <Slider {...settings} className="tours__list">
      {arrDirect && arrDirect.map((plane) => renderTourItem(plane))}
    </Slider>
  ) : (
    <ul className="tours__list">
      {isLoading || !arrDirect
        ? Array.from({ length: arrDirect.length }).map(() => {
          const key = uuidv4();
          return <ToursLoader key={key} />})
        : arrDirect.map((plane) => renderTourItem(plane))}
    </ul>
  );
  
};

export { Tours };
