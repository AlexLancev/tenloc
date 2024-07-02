import React from "react";

import "./style.scss";

const GuideRegistration = () => {
  return (
    <section className="guide-registration">
      <div className="container">
        <form className="guide-registration__form guide-form">
          <fieldset className="guide-form__fieldset">
            <legend className="guide-form__head">Регистрация гида</legend>
            <label className="guide-form__label">
              <input
                type="text"
                className="guide-form__input"
                placeholder="Имя"
              />
            </label>
            <label className="guide-form__label">
              <input
                type="text"
                className="guide-form__input"
                placeholder="Фамилия"
              />
            </label>
            <label className="guide-form__label">
              <input
                type="email"
                className="guide-form__input"
                placeholder="e-mail"
              />
            </label>
            <label className="guide-form__label">
              <input
                type="number"
                className="guide-form__input"
                placeholder="Телефон"
              />
            </label>
          </fieldset>
          <fieldset className="guide-form__fieldset">
            <label className="guide-form__label guide-form__label--ex">
              <input
                type="text"
                className="guide-form__input"
                placeholder="Название Вашей экскурсии"
              />
            </label>
            <textarea
              className="guide-form__textarea"
              placeholder="Описание экскурсии"
            ></textarea>
          </fieldset>
          <button className="guide-form__btn" type="submit">
            Отправить заявку
          </button>
          <span className="guide-form__police">
            Отправляя заявку, вы принимаете
            <a href="!#" className="guide-form__police-lin">
              условия.
            </a>
          </span>
        </form>
      </div>
    </section>
  );
};

export { GuideRegistration };
