import './rolls.css';
import Products from '../Products/Products.js';
import { useDispatch, useSelector } from 'react-redux';
import { useAllRoll, useSelectorCastom } from '../hooks/useAllRoll.js';
function Rolls({ products, openProductPopup, showProductPopup }) {
    const allRolls = useAllRoll()
    return (
        <section className='pizzzas'>
            <Products products={allRolls} openProductPopup={openProductPopup} showProductPopup={showProductPopup}></Products>
        </section>
    )
}

export default Rolls;