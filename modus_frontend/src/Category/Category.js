import React from "react";
import './category.css';

function Category ({categotyTitle,categoryImage,categoryImageAlt}) {
    return (
        <div className="category">
            <img className="category__image" src={categoryImage} alt={categoryImageAlt}></img>
            <h2 className="category__title">{categotyTitle}</h2>
        </div>
    )
}

export default Category;