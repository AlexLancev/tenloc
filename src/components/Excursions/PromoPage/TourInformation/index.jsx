import React from 'react';
import { CiStopwatch } from 'react-icons/ci';
import { FaCarAlt } from 'react-icons/fa';
import { FaBusAlt } from 'react-icons/fa';
import { FaRubleSign } from 'react-icons/fa';

import './style.scss';

const TourInformation = ({ groupMembers }) => {
  const { groupType, duration, banSize, cancelReservation } = groupMembers;

  return (
    <ul className='tour-information'>
      <li className='tour-information__item'>
        <FaCarAlt className='tour-information__icon' size={15} />
        <span className='tour-information__text'>{groupType}</span>
      </li>
      <li className='tour-information__item'>
        <CiStopwatch className='tour-information__icon' size={15} />
        <span className='tour-information__text'>{duration}</span>
      </li>
      <li className='tour-information__item'>
        <FaBusAlt className='tour-information__icon' size={15} />
        <span className='tour-information__text'>{banSize}</span>
      </li>
      <li className='tour-information__item'>
        <FaRubleSign className='tour-information__icon' size={15} />
        <span className='tour-information__text'>{cancelReservation}</span>
      </li>
    </ul>
  );
};

export { TourInformation };
