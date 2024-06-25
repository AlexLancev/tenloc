import React from "react";
import { getPlane } from "../../store/plane/planeSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SliderGallery } from "../SliderGallery";
import { TourInformation } from "../TourInformation";
import { BookExcursion } from "../BookExcursion";

import "./style.scss";

const PromoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { plane, isLoading } = useSelector((state) => state.plane);

  React.useEffect(() => {
    dispatch(getPlane(id));
  }, [dispatch, id]);

  if (isLoading || !plane) {
    return <div>Loading...</div>;
  }

  const { title, description, groupMembers, prices, images, typeExcursion, bookExcursion } =
    plane;

  return (
    <section className="presentation">
      <div className="container">
        <div className="presentation__header">
          <h2 className="presentation__title">{title}</h2>
          <div className="presentation__detail-price">
            <span className="presentation__price">от {prices[0]} &#8381;</span>
            <span className="presentation__type-excursion">
              за {typeExcursion.personally}
            </span>
          </div>
        </div>
        <SliderGallery arrImages={images} />
        <TourInformation groupMembers={groupMembers} />
        <BookExcursion arrBookExcursion={bookExcursion} />
        <div
          className="presentation__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  );
};

export { PromoPage };
