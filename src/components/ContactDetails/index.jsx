import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import "./style.scss";

const ContactsDetails = () => {
  return (
    <ul className="contact-details">
      <li className="contact-details__item">
        <a
          href="tel:+79311092881"
          className="contact-details__link contact-details__link--phone"
        >
          <FaPhoneAlt className="contact-details__icon" size={15} />
          <span className="contact-details__text">+7 (931) 109 28-81</span>
        </a>
      </li>
      <li className="contact-details__item">
        <a
          href="mailto: tenloc@yandex.ru"
          className="contact-details__link contact-details__link--email"
        >
          <MdOutlineMail className="contact-details__icon" size={15} />
          <span className="contact-details__text">tenloc@yandex.ru</span>
        </a>
      </li>
    </ul>
  );
};

export { ContactsDetails };
