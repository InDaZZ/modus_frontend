import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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



function App() {
  const [basketElementQuantityCounter, setBasketElementQuantityCounter] = useState({})
  const currLocation = useLocation().pathname;
  const showHeader = ['/', '/rolls', '/pizzas', '/aboutus'].includes(currLocation);
  const showFooter = ['/', '/rolls', '/pizzas', '/aboutus'].includes(currLocation);
  const [rolls, setRoll] = useState([]);
  const [pizzas, setPizza] = useState([]);
  const [showProductPopup, setProductPopup] = useState({})

  function openProductPopup(card) {
    setProductPopup(card)
  }
  function closeProductPopup(card) {
    setProductPopup({})
  }

  function rollTest() {
    api.rollGet()
      .then(rolls => setRoll(rolls))
      .catch((err) => console.log(err))
  }

  function pizzaTest() {
    api.pizzaGet()
      .then((pizzas) => {
        setPizza(pizzas)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    rollTest()
    pizzaTest()
  }, [])

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
  const testObj = {
    "_id": "6597d5bc4eef2a15b4336d4e",
    "name": "rol2",
    "image": "https://eda.yandex/images/3580810/87fdfbdb59a468a09344080035881f5d-400x400.jpeg",
    "proteins": "20",
    "fats": "25",
    "carbohydrates": "19",
    "availability": true,
    "cost": "290",
    "type": "в наличии",
    "__v": 0
  }



  return (
    <>
      <CurrentUserBasketContext.Provider value={{ basketElementQuantityCounter, setBasketElementQuantityCounter }}>
        {showHeader && <Header></Header>}
        <Popup card={showProductPopup} onClose={closeProductPopup}></Popup>
      <Routes>
        <Route path='/test' element={<Popup card={testObj}></Popup>}></Route>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/products' element={<Products products={rolls} currLocation={currLocation}></Products>}></Route>
        <Route path='/rolls' element={<Rolls products={rolls} openProductPopup={openProductPopup} showProductPopup={showProductPopup}></Rolls>}></Route>
        <Route path='/pizzas' element={<Pizzas products={pizzas}></Pizzas>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/basket' element={<Basket></Basket>}></Route>
      </Routes>
      {showFooter && <Footer></Footer>}
    </CurrentUserBasketContext.Provider >
    </>
  );
}
export default App;
