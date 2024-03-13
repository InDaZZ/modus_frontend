import './basket.css';
import BasketElement from '../BasketElement/BasketElement.js';
import { useBasket } from '../hooks/useBasket.js';
import { useEffect } from 'react';
import { calcSale } from '../Functions/calcSale.js';
import { useAction } from '../hooks/useActions.js';



function Basket({ products }) {
  const savedBasket = JSON.parse(localStorage.getItem('basket'));
  const basket = useBasket()

  useEffect(() => { basketSum(basket) }, [basket])

  function basketSum(arr) {
    let sums = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].sale !== 0) {
        let procent = arr[i].cost / 100 * arr[i].sale
        let constAfterSale = Math.round(arr[i].cost - procent)
        sums = sums + (constAfterSale * arr[i].quantityСounter)
      }
      else (sums = sums + (arr[i].cost * arr[i].quantityСounter))
    }
    console.log(sums)
    return sums

  }


  function renderProduct(products) {
    if (savedBasket) {
      
      return savedBasket.map((product) => {
        return (
          <BasketElement product={product}></BasketElement>

        )
      })
    }
    else (products.map((product) => {
      return (
        <BasketElement product={product}></BasketElement>

      )
    }))
    return []
  }
  console.log(basket.length)
  console.log(112312312312331231)
  const { clearBasket } = useAction()
  return (
    <section className='basket'>
      <div className='basket__title'>
        <h2>Корзина</h2>
        <button className='basket__button' onClick={clearBasket}>Очистить</button>
      </div>
      {(basket.length !== 0) ? renderProduct(basket) : <div className='basket__info-container'><p className='basket__info-text'>Тут пока ничего нет(((</p><p className='basket__info-emoji'> &#128532; </p></div>}
    </section>
  );
}

export default Basket;