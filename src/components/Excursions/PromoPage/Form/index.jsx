import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import schema from "../../../../utils/validationShema";
import { BookingDescription } from "./BookingDescription";

import "./style.scss";

const partialSchema = yup.object().shape({
  name: schema.fields.name,
  phone: schema.fields.phone,
});

const Form = ({setIsSuccessfully, setIsVisibleForm}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(partialSchema),
  });

  const onSubmit = (data) => {
    setIsVisibleForm(false);
    setIsSuccessfully(true);
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
            {...register('name')}
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
            maxLength="11"
            {...register('phone')}
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
