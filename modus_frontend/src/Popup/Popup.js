import './popup.css';
import React, { useState, useEffect } from 'react';
function Popup({ card, onClose }) {
  let testSlae = '10';
 
  function testsss(ob) {
    return ((ob.proteins * 4) + (ob.fats * 9) + (ob.carbohydrates * 4))

  }
  return (
    <div className={`popup popup_image ${card.image ? "popup_active" : ""} `} id="popupImage">
      <div className="popup__image-container">
        <img src={card.image} alt={card.name} className="popup__image" />

        <div className="popup__image-content-container">
          <h3 className="popup__image-title">{card.name}</h3>
          <div className='popup__image-price-container'>
            <p className='popup__image-price-sale'>500₽</p>
            <p className='popup__image-sale'>/419₽</p>
          </div>

          <p className='popup__image-bfc'>Белки: {card.proteins}</p>
          <p className='popup__image-bfc'>Жиры: {card.fats}</p>
          <p className='popup__image-bfc'> Углеводы: {card.carbohydrates}</p>
          <p className='popup__image-bfc'>ккал: {testsss(card)}</p>
        </div>
        <button type="button" className="popup__button-close popup__button-close_image" id="popupImageButtonClose" onClick={onClose}></button>

      </div>
    </div >
  )
};
export default Popup;