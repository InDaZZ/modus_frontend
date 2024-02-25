import React from "react";
import './products.css';
import Product from "../Product/Product.js";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'

function Products({ products, openProductPopup, showProductPopup }) {

    function renderProduct(products) {
        console.log(12)
        return products.map((product) => {
            return (
                <Product image={product.image} name={product.name} cost={product.cost} sale={product.sale} type={product.type} openProductPopup={openProductPopup} showProductPopup={showProductPopup} product={product}></Product>
            )
        })
    }
    return (
        <section className="products">
            {renderProduct(products)}
        </section>
    )

}
export default Products;