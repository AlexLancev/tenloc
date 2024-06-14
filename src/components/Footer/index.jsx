import React from "react";
import { Menu } from "../Menu";
import { ContactsDetails } from "../ContactDetails";
import { Logo } from "../Logo";
import { ListSocialNetworks } from "../ListSocialNetworks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__column">
            <Logo className="footer__logo" />
            <ListSocialNetworks className="footer__social-networks" />
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Сервис</h3>
            <Menu className="footer__menu" />
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Гидам</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Стать гидом
                </a>
              </li>
            </ul>
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

          <div className="footer__column">
            <h3 className="footer__heading">Поддержка клиентов</h3>
            <ContactsDetails />
          </div>
        </div>
        <div className="footer__bottom">
          <b className="footer__copy">&copy; 2023 «Tenloc».</b>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
