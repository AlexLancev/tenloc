import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ContactWidget } from "../ContactWidget";

import "./style.scss";

const CustomerAssistance = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="cust-assist">
      <button onClick={() => setIsVisible(!isVisible)} type="button" className="cust-assist__btn">
        <span className="cust-assist__text">Помощь клиентам</span>
        <MdKeyboardArrowDown
          className={`cust-assist__icon arrow-icon ${isVisible ? "arrow-icon--visible" : ""}`}
          size={20}
        />
      </button>
      {isVisible && <ContactWidget />}
    </div>
  );
};

export { CustomerAssistance };
