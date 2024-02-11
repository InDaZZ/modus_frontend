import './basket.css';
import BasketElement from '../BasketElement/BasketElement.js';



function Basket ({ }) {
  
 return (
    <section className='basket'>
        <div className='basket__title'>
            <h2>Корзина</h2>
            <button className='basket__button'>Очистить</button>
        </div>
      <BasketElement name={'Филадельфия'}></BasketElement>
      <BasketElement name={'Калифорния'} ></BasketElement>
      <BasketElement name={'Ролл с огурцом'}></BasketElement>
      <BasketElement name={'Массаги'}></BasketElement>
      <BasketElement name={'Киото'}></BasketElement>
      <BasketElement name={'Бонито'}></BasketElement>
      <BasketElement name={'Запеченный'}></BasketElement>
    </section>
 );
}

export default Basket;