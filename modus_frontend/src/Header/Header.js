import { Link } from 'react-router-dom';
import logoWhite from '../images/logo-white.jpg'
//import logoRed from '../images/logo-red.jpg'
import './header.css';
import basketImg from '../images/corsina 2.png';
import { useAction } from '../hooks/useActions';
import { useBasket } from '../hooks/useBasket';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Header({ toggleBasket }) {
   function openBasketPopup () {
     return toggleBasket({basket: true}) 
    }
   //console.log(useAction())
   //const { toggleBasketPopup } = useAction()
   //console.log(useSelector(state=>state.basketPopupHandle))
   console.log(toggleBasket)
   const basket = useBasket()
   let sums = 0;
  useEffect(() => { basketSum(basket) }, [basket])
  
  function basketSum(arr) {
   let sums = 0;
   for (let i = 0; i < arr.length; i++) {
     console.log(arr[i].sale)
     if(arr[i].sale !== 0) {
       let procent = arr[i].cost / 100 * arr[i].sale
       let constAfterSale = Math.round(arr[i].cost - procent)
       console.log(constAfterSale)
       console.log('я в блоке скидки')
       console.log(constAfterSale * arr[i].quantityСounter)
       sums = sums + (constAfterSale * arr[i].quantityСounter)
     }
     else(sums = sums + (arr[i].cost * arr[i].quantityСounter))
   }
   console.log(sums)
   return sums
   
 }

   //console.log(toggleBasketPopup)
   return (
      <header className='header'>
         <img src={logoWhite} className='header__logo' alt='Логотип'></img>
         <nav className='header__navigation'>
            <a href='#footer__contacts' className='header__navigation-element'>Контакты</a>
            <Link className='header__navigation-element' to={'/'}>На Главную</Link>
            <Link className='header__navigation-element' to={'/aboutus'}>О нас</Link>
            <button className='header__basket-button' onClick={openBasketPopup}>
               <span className='header__basket-image'></span>
               <span className='header__basket-sum'>{basketSum(basket) }</span>
            </button>
         </nav>
         <h1 className='header__title'>Ресторан для всей семьи</h1>

      </header>
   )
}
export default Header;