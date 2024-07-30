import React from "react";
import { getPlane } from "../../store/plane/planeSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SliderGallery } from "../SliderGallery";
import { TourInformation } from "../TourInformation";
import { BookExcursion } from "../BookExcursion";
import { PopupSubmitForm } from "../PopupSubmitForm";
import { Tours } from "../Tours";
import { Navigation } from "../Navigation";
import { ApplicationCompleted } from "../ApplicationCompleted";

import "./style.scss";

const PromoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { plane, isLoading } = useSelector((state) => state.plane);
  const [isVisibleForm, setIsVisibleForm] = React.useState(false);
  const [isSlider, setIsSlider] = React.useState(false);
  const [isSsuccessfully, setIsSuccessfully] = React.useState(false);
  
  React.useEffect(() => {
    dispatch(getPlane(id));
    setIsSlider(true);
  }, [dispatch, id]);
  
  if (isLoading || !plane) {
    return;
  }

  const {
    title,
    description,
    groupMembers,
    prices,
    images,
    typeExcursion,
    bookExcursion,
  } = plane;

  return (
    <section className="presentation">
      <div className="container">
        <Navigation plane={plane} />
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
        <div className="presentation__description-box">
          <BookExcursion arrBookExcursion={bookExcursion} setIsVisibleForm={setIsVisibleForm} />
          {isVisibleForm && <PopupSubmitForm setIsSuccessfully={setIsSuccessfully} setIsVisibleForm={setIsVisibleForm} />}
          {(isSsuccessfully && !isVisibleForm) && <ApplicationCompleted setIsSuccessfully={setIsSuccessfully} />}
          <div
            className="presentation__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Tours isSlider={isSlider} />
      </div>
    </section>
  );
};

export { PromoPage };
