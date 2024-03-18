import React, { useEffect, useState } from "react";
import './popup.css';
import { closePopupBySpaceClick } from "../Functions/closePopup";
import { onlyNumbersKey } from "../Functions/onlyNumbersKey";
import { useAction } from "../hooks/useActions";
import { useBasket } from "../hooks/useBasket";

function Popup({ isValid, isOpen, onClose, children, buttonText, onSubmit, togglePopup, popupId/*,formName, formId,  title,  ,*/ }) {

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`} id={popupId} onClick={(event) => closePopupBySpaceClick({
      event: event, closeState: togglePopup, closeStateArg: {
        basket: false,
        admin: false
      }
    })}>
      <div className="popup__container">
        <button type="button" className="popup__button-close" onClick={onClose}></button>
        {children}
      </div>
    </div >
  )
};

export default Popup;