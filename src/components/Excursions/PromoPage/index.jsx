import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getTourId } from 'store/tourId/tourIdSlice';
import { Navigation } from 'components/Navigation';

import { Tours } from '../Tours';

import { SliderGallery } from './SliderGallery';
import { TourInformation } from './TourInformation';
import { BookExcursion } from './BookExcursion';
import { PopupSubmitForm } from './PopupSubmitForm';

import { ApplicationCompleted } from './ApplicationCompleted';

import './style.scss';

const PromoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { tourId, isLoading } = useSelector((state) => state.tourId);
  const [isVisibleForm, setIsVisibleForm] = React.useState(false);
  const [isSlider, setIsSlider] = React.useState(false);
  const [isSsuccessfully, setIsSuccessfully] = React.useState(false);

  React.useEffect(() => {
    dispatch(getTourId(id));
    setIsSlider(true);
  }, [dispatch, id]);

  if (isLoading || !tourId) {
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
  } = tourId;

  return (
    <section className='presentation'>
      <div className='container'>
        <Navigation plane={tourId} />
        <div className='presentation__header'>
          <h2 className='presentation__title'>{title}</h2>
          <div className='presentation__detail-price'>
            <span className='presentation__price'>от {prices[0]} &#8381;</span>
            <span className='presentation__type-excursion'>
              за {typeExcursion.personally}
            </span>
          </div>
        </div>
        <SliderGallery arrImages={images} />
        <TourInformation groupMembers={groupMembers} />
        <div className='presentation__description-box'>
          <BookExcursion
            arrBookExcursion={bookExcursion}
            setIsVisibleForm={setIsVisibleForm}
          />
          {isVisibleForm && (
            <PopupSubmitForm
              setIsSuccessfully={setIsSuccessfully}
              setIsVisibleForm={setIsVisibleForm}
            />
          )}
          {isSsuccessfully && !isVisibleForm && (
            <ApplicationCompleted setIsSuccessfully={setIsSuccessfully} />
          )}
          <div
            className='presentation__description'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Tours isSlider={isSlider} />
      </div>
    </section>
  );
};

export { PromoPage };
