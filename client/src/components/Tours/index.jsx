import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/planes/planesSlice";
import { LuPlus } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

const Tours = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  
  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);
  
  if (isLoading || !planes) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="tours__list">
      {planes &&
        planes.map((plane) => {
          const key = uuidv4();
          return (
            <li className="tours__item" key={key}>
              <Link
                to={`/${plane._id}`}
                className="tours__img-link"
              >
                <img
                  className="tours__img"
                  width={337}
                  height={253}
                  src={plane.images[0]}
                  alt={plane.title}
                />
              </Link>
              <div className="tours__box">
                <h3 className="tours__heading">{plane.title}</h3>
                <p className="tours__text">{plane.presentation}</p>
                <div className="prices-reservation">
                  <div className="prices-reservation__details">
                    <span className="prices-reservation__price">{`от ${plane.prices[0]}`} &#8381;</span>
                    <i className="prices-reservation__quantity">
                      {` /за ${plane.typeExcursion.personally} `}
                    </i>
                  </div>
                  <Link
                    to={`/${plane._id}`}
                    className="tours__link"
                  >
                    <LuPlus className="tours__link-icon" size={20} />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export { Tours };
