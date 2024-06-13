import React from "react";
import { ListSocialNetworks } from "../ListSocialNetworks";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactWidget = () => {
  return (
    <div className="contact-widget visually-hidden">
      <time className="contact-widget__opening-hours" datetime="09:00-21:00">
        Мы на связи с 09:00 до 21:00 мск
      </time>
      <ListSocialNetworks />
      <ul className="contact-details">
        <li className="contact-details__item">
          <a
            href="/"
            className="contact-details__link contact-details__link--phone"
          >
            <FaPhoneAlt className="contact-details__icon" size={20} />
            <span className="contact-details__text">+7 (999) 125 78-81</span>
          </a>
        </li>
        <li className="contact-details__item">
          <a
            href="/"
            className="contact-details__link contact-details__link--email"
          >
            <MdOutlineMail className="contact-details__icon" size={20} />
            <span className="contact-details__text">
              aleksei.lancevv@gmail.com
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export { ContactWidget };