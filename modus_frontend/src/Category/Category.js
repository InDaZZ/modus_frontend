import React from "react";
import './category.css';

function Category({ categotyTitle, categoryImage, categoryImageAlt }) {
    return (
        <div className="category">
            <img className="category__image" src={categoryImage} alt={categoryImageAlt}></img>
            <div className="category__price">

                <div className="category__title-container">
                    <h2 className="category__title">{categotyTitle}</h2>
                    <div className="category__title-image">&#127843;</div>
                </div>
                <p className="category__info">от 299 ₽</p>
                <p className="category__info">от 40 мин</p>
        </div>
        </div >
    )
}

export default Category;