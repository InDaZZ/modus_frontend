import './basketelement.css';
import minusSvg from '../images/minusSvg.svg';

function BasketElement({ }) {
    return (
        <div className='basketelement'>
            <div>
                <img src='https://eda.yandex/images/3781088/0bea9faeaeb445b17a242b6dbffc3095-216x188.jpeg' alt='text' className='basketelement__image'></img>
            </div>
            <div className='basketelement__name-container'>
                <p className='basketelement__name'>назвние продукта</p>
                <div className='basketelement__info-container'>
                    <p className='basketelement__info'>375 ₽</p>
                    <p className='basketelement__info'>275 г</p>
                </div>
            </div>
            <div className='basketelement__buttons-container'>
                <button className='basketelement__button'>&#8722;</button>
                <span>1</span>
                <button className='basketelement__button'>&#43;</button>
            </div>
        </div>
    );
}

export default BasketElement;