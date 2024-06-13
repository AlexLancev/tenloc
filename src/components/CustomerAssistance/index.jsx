import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ContactWidget } from "../ContactWidget";

const CustomerAssistance = () => {
  return (
    <div className="cust-assist">
      <button type="button" className="cust-assist__btn">
        <span className="cust-assist__text">Помощь клиентам</span>
        <MdKeyboardArrowDown
          className="cust-assist__icon arrow-icon"
          size={20}
        />
      </button>
      <ContactWidget />
    </div>
  );
};

export { CustomerAssistance };
