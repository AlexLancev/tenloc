import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../../utils/validationShema"; // Импортируем схему валидации
import InputMask from "react-input-mask"; // Импортируем компонент для маски ввода
import debounce from "lodash.debounce"; // Импортируем функцию для дебаунса
import { useSelector } from "react-redux";

import "./style.scss";

const Form = () => {
  const [name, setName] = React.useState(""); // Состояние для хранения имени
  const [phone, setPhone] = React.useState(""); // Состояние для хранения телефона
  const { bookings } = useSelector((state) => state.booking);

  // Инициализация useForm с yupResolver для валидации
  const {
    register, // Метод для регистрации полей формы
    handleSubmit, // Метод для обработки отправки формы
    setValue, // Метод для программного задания значений полей
    trigger, // Метод для триггера валидации
    formState: { errors }, // Объект состояния формы, содержащий ошибки валидации
    reset, // Метод для сброса формы
  } = useForm({
    resolver: yupResolver(schema), // Используем yupResolver для интеграции схемы валидации
  });

  // Дебаунс функция для проверки полей через 500 мс после последнего изменения
  const debouncedValidateField = React.useCallback(
    debounce((field) => {
      trigger(field); // Триггерим валидацию для указанного поля
    }, 500),
    [trigger] // Зависимость от trigger для предотвращения изменений при каждом рендере
  );

  // Регистрация полей формы при монтировании компонента
  React.useEffect(() => {
    register("name"); // Регистрируем поле "name"
    register("phone"); // Регистрируем поле "phone"
  }, [register]);

  // Универсальная функция для обработки изменений в полях формы
  const handleFieldChange = (setter, field, value) => {
    setter(value); // Обновляем локальное состояние
    setValue(field, value); // Устанавливаем значение поля в useForm
    debouncedValidateField(field); // Запускаем дебаунс валидацию
  };

  // Обработчики изменений для полей имени и телефона
  const handleNameChange = (e) =>
    handleFieldChange(setName, "name", e.target.value);
  const handlePhoneChange = (e) =>
    handleFieldChange(setPhone, "phone", e.target.value);

  // Обработчик отправки формы
  const onSubmit = () => {
    setName(""); // Сбрасываем состояние имени
    setPhone(""); // Сбрасываем состояние телефона
    reset(); // Сбрасываем форму в useForm
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="form__fieldset">
        <legend className="form__head">Оформить заказ</legend>
        <label className="form__label">
          <input
            className="form__input"
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && (
            <span className="form__error">{errors.name.message}</span>
          )}
        </label>
        <label className="form__label">
          <InputMask
            mask="+7 (999) 999-9999"
            maskChar=" "
            className="form__input"
            placeholder="Ваш телефон"
            value={phone}
            onChange={handlePhoneChange}
          >
            {(inputProps) => <input {...inputProps} ref={inputProps.ref} />}
          </InputMask>
          {errors.phone && (
            <span className="form__error">{errors.phone.message}</span>
          )}
        </label>
      </fieldset>
      <button className="form__btn" type="submit">
        Оформить заказ
      </button>
    </form>
  );
};

export { Form };
