import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";

import "./style.scss";

const ListSocialNetworks = () => {
  return (
    <div className="social-networks">
      <ul className="social-networks__list">
        <li className="social-networks__item">
          <a
            href="https://wa.me/+79991257881"
            className="social-networks__link social-networks__link--whatsapp"
          >
            <FaWhatsapp className="social-networks__icon social-networks__icon--whatsapp" />
            <span className="social-networks__text">Whatsapp</span>
          </a>
        </li>
        <li className="social-networks__item">
          <a
            href="https://t.me/AlexVavulo"
            className="social-networks__link social-networks__link--telegram"
          >
            <LiaTelegramPlane className="social-networks__icon social-networks__icon--telegram" />
            <span className="social-networks__text">Telegram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export { ListSocialNetworks };
