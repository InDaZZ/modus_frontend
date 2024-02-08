import React from 'react';
import logoWhite from '../images/logo-white.jpg'
//import logoRed from '../images/logo-red.jpg'
import './header.css';
function Header({ }) {
   return (
      <header className='header'>
         <img src={logoWhite} className='header__logo' alt='Логотип'></img>
         <nav className='header__navigation'>
            <a href='#footer__contacts' className='header__navigation-element'>Контакты</a>
            <a className='header__navigation-element'>Акции</a>
            <a className='header__navigation-element'>О нас</a>
         </nav>
         <h1 className='header__title'>Ресторан для всей семьи</h1>
      </header>
   )
}
export default Header;