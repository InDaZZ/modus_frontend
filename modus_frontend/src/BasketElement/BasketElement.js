import { useState, useEffect } from 'react';
import './basketelement.css';
import minusSvg from '../images/minusSvg.svg';
import { CurrentUserBasketContext } from '../context/userBasketContexts.js';
import { useContext } from 'react';
import { useAction } from '../hooks/useActions.js';
import { calcSale } from '../Functions/calcSale.js';
import { useSelector } from 'react-redux';

function BasketElement({ product }) {
    
    const { addToBasket } = useAction()
    const { removeFromBasket } = useAction()

    
    function quantityCounterPlus() {
        addToBasket(product)
    }
    
    function quantityCounterMinus() {
        removeFromBasket(product)
        
    }
    
    
    return (
        <div className='basketelement'>
            <div>
                <img src={product.image} alt={product.name} className='basketelement__image'></img>
            </div>
            <div className='basketelement__name-container'>
                <p className='basketelement__name'>{product.name}</p>
                <div className='basketelement__info-container'>
                    <p className='basketelement__info'>{product.sale ? calcSale(product.cost,product.sale):product.cost}/</p>
                    <p className='basketelement__info'>275 г</p>
                </div>
            </div>
            <div className='basketelement__buttons-container'>
                <button className='basketelement__button' onClick={quantityCounterMinus}>&#8722;</button>
                <span>{product.quantityСounter}</span>
                <button className='basketelement__button' onClick={quantityCounterPlus}>&#43;</button>
            </div>
        </div>
    );
}

export default BasketElement;