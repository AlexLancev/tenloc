import React from 'react';

import './style.scss';

const TermsCooperation = () => {
  return (
    <section className='terms-cooperation'>
      <div className='container'>
        <h2 className='terms-cooperation__title'>Условия сотрудничества</h2>
        <div className='terms-cooperation__inner'>
          <ul className='terms-cooperation__list'>
            <li className='terms-cooperation__list-item'>
              <b className='terms-cooperation__head'>РАЗМЕЩЕНИЕ НА САЙТЕ</b>
              <p className='terms-cooperation__text'>
                Мы размещаем ваш продукт бесплатно. Наши маркетологи следят за
                спросом и сами принимают решение, какие экскурсии и каких гидов
                предлагать в текущий момент.
              </p>
            </li>
            <li className='terms-cooperation__list-item'>
              <b className='terms-cooperation__head'>КОМИССИЯ</b>
              <p className='terms-cooperation__text'>
                Наша комиссия составляет 23% от стоимости заказа (Россия, страны
                ЕС), и 20% (другие страны). Мы предпочитаем сотрудничать с
                гидами, которые оперативно отвечают на запросы пользователей и
                не отклоняют заказы.
              </p>
            </li>
          </ul>
          <div className='terms-cooperation__descriptions'>
            <b className='terms-cooperation__heading'>
              Мы вкладываем деньги в продвижение, а вы отвечаете за проведение
              экскурсий
            </b>
            <p className='terms-cooperation__text'>
              Поэтому мы можем работать только с гидами, которые не отклоняют
              заказы и быстро отвечают путешественникам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TermsCooperation };
