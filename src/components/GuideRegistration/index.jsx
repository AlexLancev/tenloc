import React, { useEffect, useCallback, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../../utils/validationShema";
import debounce from "lodash.debounce";

import "./style.scss";

const GuideRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    family: "",
    email: "",
    nameExcursion: "",
    descriptionsExcursion: ""
  });

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const debouncedValidateField = useCallback(
    debounce((field) => {
      trigger(field);
    }, 500),
    [trigger]
  );

  useEffect(() => {
    Object.keys(formData).forEach((field) => register(field));
  }, [register]);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    setValue(field, value);
    debouncedValidateField(field);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFieldChange(name, value);
  };

  const onSubmit = (data) => {
    console.log("Форма отправлена:", data);
    reset();
    setFormData({
      name: "",
      phone: "",
      family: "",
      email: "",
      nameExcursion: "",
      descriptionsExcursion: ""
    });
  };

  return (
    <section className="guide-registration" id="form">
      <div className="container">
        <form
          className="guide-registration__form guide-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="guide-form__fieldset">
            <legend className="guide-form__head">Регистрация гида</legend>
            {["name", "family", "email", "phone"].map((field, idx) => (
              <label key={idx} className="guide-form__label">
                <input
                  value={formData[field]}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  className="guide-form__input"
                  placeholder={
                    field === "name" ? "Имя" :
                    field === "family" ? "Фамилия" :
                    field === "email" ? "e-mail" :
                    "Телефон"
                  }
                  onChange={handleChange}
                />
                {errors[field] && (
                  <span className="guide-form__error">
                    {errors[field].message}
                  </span>
                )}
              </label>
            ))}
          </fieldset>
          <fieldset className="guide-form__fieldset">
            <label className="guide-form__label guide-form__label--ex">
              <input
                value={formData.nameExcursion}
                name="nameExcursion"
                type="text"
                className="guide-form__input"
                placeholder="Название Вашей экскурсии"
                onChange={handleChange}
              />
              {errors.nameExcursion && (
                <span className="guide-form__error">
                  {errors.nameExcursion.message}
                </span>
              )}
            </label>
            <label className="guide-form__label guide-form__label--ex">
              <textarea
                value={formData.descriptionsExcursion}
                name="descriptionsExcursion"
                className="guide-form__textarea"
                placeholder="Описание экскурсии"
                onChange={handleChange}
              ></textarea>
              {errors.descriptionsExcursion && (
                <span className="guide-form__error">
                  {errors.descriptionsExcursion.message}
                </span>
              )}
            </label>
          </fieldset>
          <button className="guide-form__btn" type="submit" disabled={!isValid}>
            Отправить заявку
          </button>
          <span className="guide-form__police">
            Отправляя заявку, вы принимаете
            <a href="!#" className="guide-form__police-link">
              условия.
            </a>
          </span>
        </form>
      </div>
    </section>
  );
};

export { GuideRegistration };
