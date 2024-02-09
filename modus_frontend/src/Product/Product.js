import React from "react";
import './product.css';
function Product({ image, name, cost, sale }) {
    return (
        <div className="product">
            <img src={image} alt='изображение продукта' className="product__image"></img>
            <div className="product__name">{name}</div>
            <div className="product__cost">
                <span className="product__full-cost_sale">{cost} ₽</span>
                <span className="product__sale">{sale}</span>
            </div>
            <button className="product__button-buy">+ Добавить</button>
        </div>
    )
}
export default Product;
