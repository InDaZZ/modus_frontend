import React from 'react';
import logoWhite from '../images/logo-white.jpg'
//import logoRed from '../images/logo-red.jpg'
import './header.css';
function Header({ }) {
   return (
      <header className='header'>
         <img src={logoWhite} className='header__logo' alt='Логотип'></img>
         <h1 className='header__title'>Ресторан для всей семьи</h1>
      </header>
   )
}
export default Header;