import React from "react";
import './category.css';
import { Link } from "react-router-dom";

function Category({ categotyTitle, categoryImage, categoryImageAlt, cost, time, linkTo }) {
    return (
        <Link className="category" to={linkTo}>
            <img className="category__image" src={categoryImage} alt={categoryImageAlt}></img>
            <div className="category__price">

                <div className="category__title-container">
                    <h2 className="category__title">{categotyTitle}</h2>
                    <div className="category__title-image">&#127843;</div>
                </div>
                <p className="category__info">от {cost}₽</p>
                <p className="category__info">от {time} мин</p>
            </div>
        </Link >
    )
}

export default Category;