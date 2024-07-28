import React from "react";
import imgGuide1 from "../../img/guide/guide1.svg";
import imgGuide2 from "../../img/guide/guide2.svg";
import imgGuide3 from "../../img/guide/guide3.svg";
import imgGuide4 from "../../img/guide/guide4.svg";
import "./style.scss";

const OfferTour = () => {
  return (
    <section className="offer-tour">
      <div className="container">
        <h2 className="offer-tour__title">Предложите авторскую экскурсию!</h2>
        <p className="offer-tour__description">
          Как это сделать? Каждая экскурсия нашего сервиса – полноценный
          продукт, созданный нашими общими усилиями – гида, команды нашего
          сервиса и группы экспертов.
        </p>
        <ul className="offer-tour__list">
          <li className="offer-tour__list-item">
            <div style={{backgroundImage: `url(${imgGuide1})`}} className="offer-tour__img"></div>
            <b className="offer-tour__head">Отправьте заявку</b>
            <p className="offer-tour__text">
              Расскажите о своей экскурсии, предлагая стройную концепцию – ваш
              взгляд на объект экскурсии, через который вы будете знакомить с
              ним гостей
            </p>
          </li>
          <li className="offer-tour__list-item">
          <div style={{backgroundImage: `url(${imgGuide2})`}} className="offer-tour__img"></div>
            <b className="offer-tour__head">Ждите ответа</b>
            <p className="offer-tour__text">
              Мы позвоним вам и сообщим, насколько ваше предложение подходит для
              нашего сервиса, что можно или нужно будет доработать
            </p>
          </li>
          <li className="offer-tour__list-item">
          <div style={{backgroundImage: `url(${imgGuide3})`}} className="offer-tour__img"></div>
            <b className="offer-tour__head">Звонок-знакомство</b>
            <p className="offer-tour__text">
              Мы договоримся о созвоне, на котором обсудим детали экскурсии,
              представление ее на нашем ресурсе и условия нашего сотрудничества
            </p>
          </li>
          <li className="offer-tour__list-item">
          <div style={{backgroundImage: `url(${imgGuide4})`}} className="offer-tour__img"></div>
            <b className="offer-tour__head">Экскурсия на сайте</b>
            <p className="offer-tour__text">
              Мы готовим карточку вашей экскурсии и размещаем ее на сайте таким
              образом, чтобы она привлекала целевых посетителей
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { OfferTour };
