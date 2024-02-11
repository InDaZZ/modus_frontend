import './rolls.css';
import Products from '../Products/Products.js';
 function Rolls ({products}) {
    return (
        <section className='pizzzas'>
            <Products products={products}></Products>
        </section>
    )
 }

 export default Rolls;