import React from "react";
import { Form } from "../Form";
import { RxCross2 } from "react-icons/rx";
import { bodyScroll } from "../../../../utils/body-scroll";

import "./style.scss";

const PopupSubmitForm = ({ setIsVisibleForm, setIsSuccessfully }) => {
  const handleClickRemovePopup = () => {
    bodyScroll.unLock();
    setIsVisibleForm(false);
  };

  return (
    <div className="popup">
      <div className="popup__body">
        <button
          type="button"
          onClick={handleClickRemovePopup}
          className="popup__close-btn"
        >
          <RxCross2 size={20} className="popup__close-icon" />
        </button>
        <Form setIsSuccessfully={setIsSuccessfully} setIsVisibleForm={setIsVisibleForm} />
      </div>
    </div>
  );
};

export { PopupSubmitForm };
