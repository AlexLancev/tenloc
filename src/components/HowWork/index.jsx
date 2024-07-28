import React from "react";
import HowWorkBg from "../../img/about/bg2.webp"
import "./style.scss";

const HowWork = () => {
  return (
    <section className="how-work" style={{backgroundImage: `url(${HowWorkBg})`}}>
      <div className="container">
        <h2 className="how-work__title">Как мы работаем</h2>
        <ul className="how-work__list">
          <li className="how-work__item">
            <b className="how-work__head">Выбирайте экскурсию</b>
            <p className="how-work__text">
              Сделайте свой выбор на нашем сайте. Все представленные на нем
              экскурсии – авторские. Проводить экскурсию будет тот, кто ее
              составил. Ознакомьтесь с программой, изучите информацию о гиде,
              загляните в отзывы и найдите свою экскурсию, на которую вы больше
              всего откликаетесь.
            </p>
          </li>
          <li className="how-work__item">
            <b className="how-work__head">Познакомьтесь с гидом</b>
            <p className="how-work__text">
              Для принятия решения вы можете пообщаться с гидом напрямую – до
              того, как внесли оплату. Оцените, насколько комфортно вам будет на
              экскурсии с этим человеком, насколько вы склонны доверять его
              экспертизе и опыту, задайте важные вопросы и проясните нужные
              детали.
            </p>
          </li>
          <li className="how-work__item">
            <b className="how-work__head">Платите частями</b>
            <p className="how-work__text">
              Не нужно платить всю сумму за экскурсию сразу, оплатите всего 20%
              стоимости на сайте, остальную часть – сразу после экскурсии.
              Внесенного залога будет достаточно для бронирования указанного в
              заказе времени.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { HowWork };
