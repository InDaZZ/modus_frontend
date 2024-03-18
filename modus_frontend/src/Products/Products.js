import React from "react";
import './products.css';
import Product from "../Product/Product.js";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'

function Products({ products, openProductPopup, showProductPopup, deleteProduct,changeProduct }) {

    function renderProduct(products) {

        return products.map((product) => {
            return (
                <Product image={product.image} name={product.name} cost={product.cost} sale={product.sale} availability={product.availability} openProductPopup={openProductPopup} showProductPopup={showProductPopup} product={product} deleteProduct={deleteProduct} changeProduct={changeProduct}></Product>
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