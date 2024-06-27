import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCurrent } from "../../store/order/bookingReducer";
import { MyBtnMinus, MyBtnPlus } from "../ui/Buttons";
import { MyDatePicker } from "../ui/DataPicker";
import { v4 as uuidv4 } from "uuid";
import { bodyScroll } from "../../utils/body-scroll";
import "./style.scss";

const BookExcursion = ({ arrBookExcursion, setIsVisibleForm }) => {
  const dispatch = useDispatch();

  // Состояние для хранения количеств и выбранной даты
  const [quantities, setQuantities] = useState(arrBookExcursion.map(() => 0));
  const [total, setTotal] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  // Обработчик изменения количества
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

  // Обработчик отправки формы
  const onSubmit = (e) => {
    e.preventDefault();

    // Формирование объекта с данными
    const bookingDetails = {
      date: selectedDate ? selectedDate.format() : null,
      excursions: arrBookExcursion.map((item, index) => ({
        category: item.category,
        quantity: quantities[index],
        price: item.price,
      })),
      total,
    };

    // Передача данных в useDispatch
    dispatch(orderCurrent(bookingDetails));

    // Сброс состояния
    setQuantities(arrBookExcursion.map(() => 0));
    setTotal(0);
    setSelectedDate(null);
    setIsVisibleForm(true);
    bodyScroll.lock();
  };

  return (
    <form className="book-excursion" onSubmit={onSubmit}>
      <b className="book-excursion__title">Забронировать экскурсию</b>
      <MyDatePicker onChange={(date) => setSelectedDate(date)} />
      <table className="book-excursion__table">
        <tbody className="book-excursion__body">
          {arrBookExcursion &&
            arrBookExcursion.map((item, index) => {
              const key = uuidv4();
              return (
                <tr className="book-excursion__row" key={key}>
                  <td className="book-excursion__cell book-excursion__cell--category">
                    {item.category}
                  </td>
                  <td className="book-excursion__cell book-excursion__cell--price">
                    {item.price}
                  </td>
                  <td className="book-excursion__cell book-excursion__cell--controls">
                    <div className="book-excursion__number">
                      <MyBtnPlus handleCalc={() => handleCalc(index, 1)} />
                      <input
                        type="number"
                        className="book-excursion__input"
                        readOnly
                        value={quantities[index]}
                        min="0"
                      />
                      <MyBtnMinus handleCalc={() => handleCalc(index, -1)} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="book-excursion__box">
        <span className="book-excursion__total">Итого:</span>
        <b className="book-excursion__price">{total}</b>
      </div>
      <button
        className="book-excursion__btn"
        type="submit"
        disabled={total === 0}
      >
        Оформить заказ
      </button>
    </form>
  );
};

export { BookExcursion };
