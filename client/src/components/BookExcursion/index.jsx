import React, { useRef, useState } from "react";
import { MyBtnMinus, MyBtnPlus } from "../ui/Buttons";
import { MyDataPicker } from "../ui/DataPicker";
// import { v4 as uuidv4 } from "uuid";

const BookExcursion = ({ arrBookExcursion }) => {
  const [total, setTotal] = useState(0);
  const inputRefs = useRef([]);

  const handleCalc = (index, increment) => {
    const inputEl = inputRefs.current[index];
    const currentValue = parseInt(inputEl.value, 10);
    const newValue = currentValue + increment;

    if (newValue >= 0) {
      inputEl.value = newValue;
      const price = parseInt(inputEl.dataset.price, 10);
      setTotal((prevTotal) => prevTotal + increment * price);
    }
  };

  return (
    <form className="book-excursion">
      <div className="book-excursion__date-picker">
        <MyDataPicker />
      </div>
      <b className="book-excursion__title">Забронировать экскурсию</b>
      <table className="book-excursion__table">
        <tbody className="book-excursion__body">
          {arrBookExcursion &&
            arrBookExcursion.map((item, index) => {
              // const key = uuidv4();
              return (
                <tr className="book-excursion__row" key={index}>
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
                        data-price={item.price}
                        defaultValue="0"
                        ref={(el) => (inputRefs.current[index] = el)}
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
      <button className="book-excursion__btn" type="submit">
        Оформить заказ
      </button>
    </form>
  );
};

export { BookExcursion };
