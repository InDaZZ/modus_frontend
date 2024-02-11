import './pizzas.css';
import Products from '../Products/Products.js';
 function Pizzas ({products}) {
    return (
        <section className='pizzzas'>
            <Products products={products}></Products>
        </section>
    )
 }

 export default Pizzas;