import React, { useState } from "react";
import './product.css';
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import { useAction } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { calcSale } from "../Functions/calcSale";
import { useLocation } from "react-router";
function Product({ image, name, cost, sale, availability, openProductPopup, product, deleteProduct, changeProduct }) {
    const location = useLocation();
    const notAdminPanel = location.pathname !== '/adminPanel';
    function openPopup() {
        openProductPopup(product)
    }
    function onchangeProduct () {
        changeProduct(product)
    }
    const { addToBasket } = useAction()

    function handleSubmitDeleteRoll(evt) {
        evt.preventDefault()


        let admin = localStorage.getItem('adminToken')
        let rollData = { ...product, owner: admin }
        console.log(rollData)
        deleteProduct(rollData)
    }

    function buttonState(availability) {
        if (!notAdminPanel) {
            return false
        }

        if (availability === false) {
            return true
        }
        if (availability === true) {
            return false
        }

    }
    return (
        <div className={(availability === true) ? 'product' : 'product product_stop'}>
            <img src={image} alt='изображение продукта' className="product__image" onClick={notAdminPanel ? openPopup : onchangeProduct}></img>
            <div className="product__name">{name}</div>
            <div className="product__cost">
                <span className={sale ? "product__full-cost_sale" : 'product__full-cost'}>{cost}₽</span>
                <span className={sale ? "product__sale" : "product__sale_disabled"}>/{calcSale(cost, sale)}₽</span>
            </div>
            <button className="product__button-buy" onClick={notAdminPanel ? () => addToBasket(product) : handleSubmitDeleteRoll} disabled={buttonState(availability)}>{notAdminPanel ? '+ Добавить' : 'удалить'}</button>
        </div >
    )
}
export default Product;
