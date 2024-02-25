import React from "react";
import './product.css';
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
function Product({ image, name, cost, sale, type, openProductPopup, showProductPopup, product }) {

    function test() { 
        openProductPopup(product)
    }


    function testSale(cost, sale) {
        let procent = cost / 100 * sale
        return Math.round(cost - procent)
    }
    function buttonState(type) {
        if (type === 'стоп') {
            return true
        }
        return false
    }
    return (
        <div className={(type !== 'стоп') ? 'product' : 'product product_stop'} onClick={test}>
            <img src={image} alt='изображение продукта' className="product__image"></img>
            <div className="product__name">{name}</div>
            <div className="product__cost">
                <span className={sale ? "product__full-cost_sale" : 'product__full-cost'}>{cost}₽</span>
                <span className={sale ? "product__sale" : "product__sale_disabled"}>{testSale(cost, sale)}₽</span>
            </div>
            <button className="product__button-buy" onClick={() => { console.log('я работаю') }} disabled={buttonState(type)}>+ Добавить</button>
        </div >
    )
}
export default Product;
