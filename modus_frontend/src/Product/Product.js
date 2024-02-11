import React from "react";
import './product.css';
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
function Product({ image, name, cost, sale, product }) {
    function buttonState(product) {
        if (product === 'стоп') {
            return true
        }
        return false
    }
    return (
        <div className={(product !== 'стоп') ? 'product' : 'product product_stop'}>
            <img src={image} alt='изображение продукта' className="product__image"></img>
            <div className="product__name">{name}</div>
            <div className="product__cost">
                <span className="product__full-cost_sale">{cost} ₽</span>
                <span className="product__sale">{sale}</span>
            </div>
            <button className="product__button-buy" onClick={() => { console.log('я работаю') }} disabled={buttonState(product)}>+ Добавить</button>
        </div >
    )
}
export default Product;
