import React, { useEffect, useState } from "react";
import './popup.css';
import { closePopupBySpaceClick } from "../Functions/closePopup";
import { onlyNumbersKey } from "../Functions/onlyNumbersKey";
import { useAction } from "../hooks/useActions";
import { useBasket } from "../hooks/useBasket";

function Popup({ isOpen, popupId, formName, formId, onClose, title, children, buttonText, onSubmit, isValid, togglePopup }) {

  const [values, setValue] = useState('+7')
  const [test, setTest] = useState(false)
  const [hidenFormElement, setHidenFormElement] = useState(false)
  const basket = useBasket()
  const { clearBasket } = useAction()

  useEffect(() => { basket.length === 0 ? setHidenFormElement(false) : setHidenFormElement(true) }, [basket]);

  function handleChange(evt) {
    const { value } = evt.target;
    if (value === '' || value === '+') {
      return setValue('+7')
    }

    if (value === '+78' || value === '+7+' || value === '+78') {
      const phoneNumer = value.slice(0, 2)
      return setValue(phoneNumer)
    }
    if (value[0] === '9') {

      return setValue(`+7${value}`)
    }
    if (value[2] === '7') {

      return setValue(`+7${value}`)
    }
    return setValue(value)
  }
  function hendleTest(evt) {
    evt.preventDefault()
    onSubmit(basket, values)
    setTest('Заказ успешно оформлен, в ближайшее времяя мы свзяжемся с вами для уточнения деталей')
    clearBasket()
    setTimeout(() => {
      togglePopup(null)
      setTest(false)
    }, 3000)

  }


  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`} id={popupId} onClick={(event) => closePopupBySpaceClick({ event: event, closeState: togglePopup, closeStateArg: null })}>
      <div className="popup__container">
        <button type="button" className="popup__button-close" onClick={() => {
          togglePopup(null)
          setTest(false)
        }}></button>
        {(test !== false) ?
          <div className="popup__order_success">
            <p className="popup__order_success-text">{test}</p>
            <span className="popup__order_success-emoji">&#9989;</span>
          </div> :
          children}
        <form onSubmit={hendleTest}>
          <input className={hidenFormElement ? "popup__basket-input" : "popup__basket-input_hiden"} type="tel" name="number" placeholder="+79" minLength="11" maxLength="12" value={values || ''} onChange={handleChange} onKeyDown={onlyNumbersKey} required='true'>
          </input>
          <button type="submit" className={hidenFormElement ? `popup__button-submit` : `popup__button-submit_hiden`}  >{buttonText}</button>
        </form>


      </div>
    </div >
  )
};

export default Popup;