import React from "react";
import { ContactsDetails } from "../../ContactDetails";
import { Logo } from "../Logo";
import { ListSocialNetworks } from "../ListSocialNetworks";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__column">
            <Logo />
            <div className="footer__social">
              <span className="footer__social-head">Мы в соц. сетях</span>
              <ListSocialNetworks />
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Документы</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Политика возврата билетов
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Договор оферты
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Условия использования сайта
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Политика обработки персональных данных
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Реквизиты
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column footer__column--contacts">
            <h3 className="footer__heading">Поддержка клиентов</h3>
            <ContactsDetails />
          </div>
        </div>
        <div className="footer__bottom">
          <b className="footer__copy">&copy; {new Date().getFullYear()} «Tenloc».</b>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
