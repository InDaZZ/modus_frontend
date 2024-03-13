import './pizzas.css';
import Products from '../Products/Products.js';
import { useDispatch, useSelector } from 'react-redux';
import { useAllPizzas } from '../hooks/useAllPizzas.js';

function Pizzas({ products, openProductPopup, showProductPopup }) {
    const allPizzas = useAllPizzas();
    
    
    return (
        <section className='pizzzas'>
            <Products products={allPizzas} openProductPopup={openProductPopup} showProductPopup={showProductPopup}></Products>
        </section>
    )
}

export default Pizzas;