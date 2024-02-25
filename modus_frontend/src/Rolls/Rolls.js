import './rolls.css';
import Products from '../Products/Products.js';
function Rolls({ products, openProductPopup, showProductPopup }) {
    console.log(products)
    return (
        <section className='pizzzas'>
            <Products products={products} openProductPopup={openProductPopup} showProductPopup={showProductPopup}></Products>
        </section>
    )
}

export default Rolls;