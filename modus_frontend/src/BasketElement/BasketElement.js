import { useState, useEffect } from 'react';
import './basketelement.css';
import minusSvg from '../images/minusSvg.svg';
import { CurrentUserBasketContext } from '../context/userBasketContexts.js';
import { useContext } from 'react';

function BasketElement({ name}) {
    const { basketElementQuantityCounter, setBasketElementQuantityCounter } = useContext(CurrentUserBasketContext);
    const [quantityCounter, setQuantityCounter] = useState(0);
    function quantityCounterPlus() {
        setQuantityCounter((prevState) => prevState + 1)
        setBasketElementQuantityCounter(name=quantityCounter)
        console.log(basketElementQuantityCounter)
    }
    function quantityCounterMinus() {
        if (quantityCounter !== 0) {
            setQuantityCounter((prevState) => prevState - 1)
            setBasketElementQuantityCounter(name=quantityCounter)
        }
        return;
    }
    
    return (
        <div className='basketelement'>
            <div>
                <img src='https://eda.yandex/images/3781088/0bea9faeaeb445b17a242b6dbffc3095-216x188.jpeg' alt='text' className='basketelement__image'></img>
            </div>
            <div className='basketelement__name-container'>
                <p className='basketelement__name'>{name}</p>
                <div className='basketelement__info-container'>
                    <p className='basketelement__info'>375 ₽</p>
                    <p className='basketelement__info'>275 г</p>
                </div>
            </div>
            <div className='basketelement__buttons-container'>
                <button className='basketelement__button' onClick={quantityCounterMinus}>&#8722;</button>
                <span>{quantityCounter}</span>
                <button className='basketelement__button' onClick={quantityCounterPlus}>&#43;</button>
            </div>
        </div>
    );
}

export default BasketElement;