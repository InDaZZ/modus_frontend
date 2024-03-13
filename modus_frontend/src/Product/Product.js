import React, { useState } from "react";
import './product.css';
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import { useAction } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { calcSale } from "../Functions/calcSale";
function Product({ image, name, cost, sale, type, openProductPopup, showProductPopup, product }) {
    console.log(useSelector(state => state.basket))
  
    function openPopup() {
        openProductPopup(product)
    }
    const { addToBasket } = useAction()
    
    function buttonState(type) {
        if (type === false) {
            return true
        }
        return false
    }
    return (
        <div className={(type === true) ? 'product' : 'product product_stop'}>
            <img src={image} alt='изображение продукта' className="product__image" onClick={openPopup}></img>
            <div className="product__name">{name}</div>
            <div className="product__cost">
                <span className={sale ? "product__full-cost_sale" : 'product__full-cost'}>{cost}₽</span>
                <span className={sale ? "product__sale" : "product__sale_disabled"}>/{calcSale(cost, sale)}₽</span>
            </div>
            <button className="product__button-buy" onClick={() => addToBasket(product)} disabled={buttonState(type)}>+ Добавить</button>
        </div >
    )
}
export default Product;
