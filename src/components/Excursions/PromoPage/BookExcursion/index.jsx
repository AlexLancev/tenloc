import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { orderCurrent } from 'store/order/bookingReducer';

import { MyBtnMinus, MyBtnPlus } from 'components/ui/Buttons';

import { bodyScroll } from 'utils/body-scroll';

import { MyDatePicker } from 'components/ui/DataPicker';

import './style.scss';

const BookExcursion = ({ arrBookExcursion, setIsVisibleForm }) => {
  const dispatch = useDispatch();
  const today = dayjs().format('DD-MM-YYYY');
  const [quantities, setQuantities] = useState(arrBookExcursion.map(() => 0));
  const [total, setTotal] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCalc = (index, increment) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      const newValue = newQuantities[index] + increment;
      if (newValue >= 0) {
        newQuantities[index] = newValue;
        const price = arrBookExcursion[index].price;
        setTotal((prevTotal) => prevTotal + increment * price);
      }
      return newQuantities;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      date: selectedDate ? selectedDate.format('DD-MM-YYYY') : today,
      excursions: arrBookExcursion.reduce((accumulator, item, index) => {
        const quantity = quantities[index];
        if (quantity > 0) {
          accumulator.push({
            category: item.category,
            quantity: quantity,
            price: item.price * quantity,
          });
        }
        return accumulator;
      }, []),
      total,
    };

    dispatch(orderCurrent(bookingDetails));

    setQuantities(arrBookExcursion.map(() => 0));
    setTotal(0);
    setSelectedDate(null);
    setIsVisibleForm(true);
    bodyScroll.lock();
  };

  return (
    <form className='book-excursion' onSubmit={onSubmit}>
      <b className='book-excursion__title'>Забронировать экскурсию</b>
      <MyDatePicker onChange={(date) => setSelectedDate(date)} />
      <table className='book-excursion__table'>
        <tbody className='book-excursion__body'>
          {arrBookExcursion &&
            arrBookExcursion.map((item, index) => {
              return (
                <tr className='book-excursion__row' key={index}>
                  <td className='book-excursion__cell book-excursion__cell--category'>
                    {item.category}
                  </td>
                  <td className='book-excursion__cell book-excursion__cell--price'>
                    {item.price}
                  </td>
                  <td className='book-excursion__cell book-excursion__cell--controls'>
                    <div className='book-excursion__number'>
                      <MyBtnPlus handleCalc={() => handleCalc(index, 1)} />
                      <input
                        id={index}
                        type='number'
                        className='book-excursion__input'
                        readOnly
                        value={quantities[index]}
                        min='0'
                        max='2'
                      />
                      <MyBtnMinus handleCalc={() => handleCalc(index, -1)} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className='book-excursion__box'>
        <span className='book-excursion__total'>Итого: </span>
        <b className='book-excursion__price'>{total}</b>
      </div>
      <button
        className='book-excursion__btn'
        type='submit'
        disabled={total === 0}
      >
        Оформить заказ
      </button>
    </form>
  );
};

export { BookExcursion };
