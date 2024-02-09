import './basket.css';
import BasketElement from '../BasketElement/BasketElement.js';

function Basket ({ }) {
 return (
    <section className='basket'>
        <div className='basket__title'>
            <h2>Корзина</h2>
            <button className='basket__button'>Очистить</button>
        </div>
      <BasketElement></BasketElement>
    </section>
 );
}

export default Basket;