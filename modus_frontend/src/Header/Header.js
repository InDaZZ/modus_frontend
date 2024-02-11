import { Link } from 'react-router-dom';
import logoWhite from '../images/logo-white.jpg'
//import logoRed from '../images/logo-red.jpg'
import './header.css';
import basketImg from '../images/corsina 2.png';

function Header({ }) {
   return (
      <header className='header'>
         <img src={logoWhite} className='header__logo' alt='Логотип'></img>
         <nav className='header__navigation'>
            <a href='#footer__contacts' className='header__navigation-element'>Контакты</a>
            <Link className='header__navigation-element' to={'/'}>На Главную</Link>
            <Link className='header__navigation-element' to={'/aboutus'}>О нас</Link>
            <button className='header__basket-button'>
            <span className='header__basket-image'></span>
            <span className='header__basket-sum'>10000 р</span>
         </button>
         </nav>
         <h1 className='header__title'>Ресторан для всей семьи</h1>
         
      </header>
   )
}
export default Header;