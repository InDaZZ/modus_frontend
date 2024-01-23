import React from "react";
import './product.css';
function Product({ }) {
    return (
        <div className="product">
            <img src="https://eda.yandex/images/3790679/a90d10946021c77e20c7d54cb4972cf8-216x188.jpeg" alt='изображение продукта' className="product__image"></img>
            <div className="product__cost">
                <span className="product__full-cost">555₽</span>
                <span className="product__sale">410₽</span>
            </div>
            <div className="product__name"></div>
            <button className="product__button-buy">+ Добавить</button>
        </div>
    )
}
export default Product;