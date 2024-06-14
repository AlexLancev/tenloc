import React from "react";
import { ListSocialNetworks } from "../ListSocialNetworks";
import { ContactsDetails } from "../ContactDetails";

import "./style.scss";

const ContactWidget = () => {
  return (
    <div className="contact-widget visually-hidden">
      <time className="contact-widget__opening-hours" datetime="09:00-21:00">
        Мы на связи с 09:00 до 21:00 мск
      </time>
      <ListSocialNetworks />
      <ContactsDetails />
    </div>
  );
};

export { ContactWidget };
