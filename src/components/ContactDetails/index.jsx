import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import "./style.scss";

const ContactsDetails = () => {
  return (
    <ul className="contact-details">
      <li className="contact-details__item">
        <a
          href="/"
          className="contact-details__link contact-details__link--phone"
        >
          <FaPhoneAlt className="contact-details__icon" size={15} />
          <span className="contact-details__text">+7 (999) 125 78-81</span>
        </a>
      </li>
      <li className="contact-details__item">
        <a
          href="/"
          className="contact-details__link contact-details__link--email"
        >
          <MdOutlineMail className="contact-details__icon" size={15} />
          <span className="contact-details__text">
            aleksei.lancevv@gmail.com
          </span>
        </a>
      </li>
    </ul>
  );
};

export { ContactsDetails };
