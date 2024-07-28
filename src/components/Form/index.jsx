import React, { useEffect, useCallback, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../../utils/validationShema";
import debounce from "lodash.debounce";
import { BookingDescription } from "../BookingDescription";

import "./style.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const debouncedValidateField = useCallback(
    debounce((field) => {
      trigger(field);
    }, 500),
    [trigger]
  );

  useEffect(() => {
    register("name");
    register("phone");
  }, [register]);

  const handleFieldChange = (setter, field, value) => {
    setter(value);
    setValue(field, value);
    debouncedValidateField(field);
  };

  const handleNameChange = (e) => {
    handleFieldChange(setName, "name", e.target.value);
  };

  const handlePhoneChange = (e) => {
    handleFieldChange(setPhone, "phone", e.target.value);
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
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
          <input
            className="form__input"
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={handlePhoneChange}
            maxLength="11"
          />
          {errors.phone && (
            <span className="form__error">{errors.phone.message}</span>
          )}
        </label>
      </fieldset>
      <BookingDescription />
      <button className="form__btn" type="submit">
        Оформить заказ
      </button>
    </form>
  );
};

export { Form };
