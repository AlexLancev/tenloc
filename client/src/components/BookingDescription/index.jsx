import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const BookingDescription = () => {
  const { bookings } = useSelector((state) => state.booking);

  return (
    <div className="booking-description">
      <h3 className="booking-description__head">Состав заказа</h3>
      <ul className="booking-description__list">
        {bookings &&
          bookings.excursions.map((item) => {
            const key = uuidv4();
            return (
                <li key={key} className="booking-description__item">
                  <ul className="booking-description__list">
                    <li className="booking-description__item">Категория: {item.category}</li>
                    <li className="booking-description__item">Количество: {item.quantity}</li>
                    <li className="booking-description__item">Цена: {item.price}</li>
                  </ul>
                </li>
              )
          })}
      </ul>
      <b>Дата: {bookings.date}</b>
      <b>Итоговая стоимость: {bookings.total}</b>
    </div>
  );
};

export { BookingDescription };
