import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, json } from 'react-router-dom';
import './App.css';
import { CurrentUserBasketContext } from '../context/userBasketContexts.js';
import Header from '../Header/Header.js';
import Product from '../Product/Product.js';
import Category from '../Category/Category.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js'
import Products from '../Products/Products.js';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import AboutUs from '../AboutUs/AboutUs.js';
import Basket from '../Basket/Basket.js';
import Pizzas from '../Pizzas/Pizzas.js';
import Rolls from '../Rolls/Rolls.js';
import { api } from '../utils/Api.js';
import Popup from '../Popup/Popup.js';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../Store/Products/rollSlice.js';
import { useAction } from '../hooks/useActions.js';
import { useSelectorCastom } from '../hooks/useAllRoll.js';
import PopupMain from '../PopupMain/Popup.js';
import { calcSale } from '../Functions/calcSale.js';



function App() {
  const [basketElementQuantityCounter, setBasketElementQuantityCounter] = useState({})
  const currLocation = useLocation().pathname;
  const showHeader = ['/', '/rolls', '/pizzas', '/aboutus'].includes(currLocation);
  const showFooter = ['/', '/rolls', '/pizzas', '/aboutus'].includes(currLocation);
  const [rolls, setRoll] = useState([]);
  const [pizzas, setPizza] = useState([]);
  const [showProductPopup, setProductPopup] = useState({})
  const basketPopupState = useSelector(state => state.basketPopupHandle);
  const isOpenPopup = showProductPopup || basketPopupState

  const closePopups = () => {
    setProductPopup({});
    toggleBasketPopup(null)
  };

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closePopups();
      }
    }
    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
    }
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    }
  }, [isOpenPopup])

  function openProductPopup(card) {
    setProductPopup(card)
  }
  function closeProductPopup(card) {
    setProductPopup({})
  }
  const { addRolls } = useAction();
  const { addPizzas } = useAction();
  const { toggleBasketPopup } = useAction();

  const testPPPP = useSelector(state => state.basketPopupHandle)
  console.log(testPPPP)


  const testState = useSelector(state => state)
  console.log(testState)

  function rollTest() {
    api.rollGet()
      .then((rolls) => {
        addRolls(rolls)
        localStorage.setItem('rolls', JSON.stringify(rolls))//удалить позхже
      })
      .catch((err) => console.log(err))
  }

  function pizzaTest() {
    api.pizzaGet()
      .then((pizzas) => {
        addPizzas(pizzas)
        localStorage.setItem('pizzas', JSON.stringify(pizzas))//удалить позхже
      })
      .catch((err) => console.log(err))
  }
  async function createAnonimOrder(basket, phone) {
    let owner = localStorage.getItem("token")
    console.log(owner)
    const order = [];
    basket.forEach(element => {
      order.push(`${element.name}, ${element.quantityСounter}шт, Сумма ${calcSale(element.cost, element.sale) * element.quantityСounter} P`)
    });
    console.log(order)
    api.anonimOrderCreate({ order: order, phone: phone, owner: owner })
  }

  useEffect(() => {
    pizzaTest()
    rollTest()

  }, [])

  console.log(JSON.parse(localStorage.getItem('pizzas')))//удалить позхже
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"))
      return
    }
    registrTest()
  }, [])

  function registrTest() {
    api.register()
      .then((res) => localStorage.setItem("token", res.token))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <CurrentUserBasketContext.Provider value={{ basketElementQuantityCounter, setBasketElementQuantityCounter }}>
        {showHeader && <Header toggleBasket={toggleBasketPopup}></Header>}
        <Popup card={showProductPopup} onClose={closeProductPopup}></Popup>
        <PopupMain children={<Basket />} togglePopup={toggleBasketPopup} isOpen={testPPPP} buttonText={'Все верно. Оформить заказ'} isValid={true} onSubmit={createAnonimOrder}></PopupMain>
        <Routes>
          <Route path='/test' element={<PopupMain children={<Basket />} buttonText={'Все верно. Оформить заказ'} isValid={true}></PopupMain>}></Route>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/products' element={<Products products={rolls} currLocation={currLocation}></Products>}></Route>
          <Route path='/rolls' element={<Rolls products={rolls} openProductPopup={openProductPopup} showProductPopup={showProductPopup}></Rolls>}></Route>
          <Route path='/pizzas' element={<Pizzas products={pizzas} openProductPopup={openProductPopup} showProductPopup={showProductPopup}></Pizzas>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/basket' element={<Basket></Basket>}></Route>
        </Routes>
        {showFooter && <Footer></Footer>}
      </CurrentUserBasketContext.Provider >
    </>
  );
}
export default App;
