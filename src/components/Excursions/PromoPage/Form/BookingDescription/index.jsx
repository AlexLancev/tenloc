import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

const BookingDescription = () => {
  const { bookings } = useSelector((state) => state.booking);

  return (
    <div className='booking-description'>
      <h3 className='booking-description__head'>Состав заказа</h3>
      <ul className='booking-description__lists'>
        {bookings &&
          bookings.excursions.map((item, index) => {
            return (
              <li key={index} className='booking-description__items'>
                <ul className='booking-description__list'>
                  <li className='booking-description__item'>
                    Категория: {item.category}
                  </li>
                  <li className='booking-description__item'>
                    Количество: {item.quantity}
                  </li>
                  <li className='booking-description__item'>
                    Цена: {item.price}
                  </li>
                </ul>
              </li>
            );
          })}
      </ul>
      <b className='booking-description__date'>Дата: {bookings.date}</b>
      <b className='booking-description__total-price'>
        Итоговая стоимость: {bookings.total}
      </b>
    </div>
  );
};

export { BookingDescription };
