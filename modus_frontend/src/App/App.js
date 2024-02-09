import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Product from '../Product/Product.js';
import Category from '../Category/Category.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js'
import Products from '../Products/Products.js';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import AboutUs from '../AboutUs/AboutUs.js';
import Basket from '../Basket/Basket.js';



function App() {

  const currLocation = useLocation().pathname;
  const showHeader = ['/', '/products', '/aboutus'].includes(currLocation);
  const showFooter = ['/', '/products', '/aboutus'].includes(currLocation);

  return (
    <>
      {showHeader && <Header></Header>}
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/basket' element={<Basket></Basket>}></Route>
      </Routes>
      {showFooter && <Footer></Footer>}
    </>
  );
}
export default App;
