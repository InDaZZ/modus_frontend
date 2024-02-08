import './aboutus.css';
import aestheticFood from '../images/food-est.jpg';
import pixelPark from '../images/Pixel.jpg';
import bowling from '../images/bowling.jpg';
import slastipark from '../images/slastipark.jpg'
function AboutUs({ }) {
    return (
        <section className='aboutus'>
            <div className='aboutus__element'>
                <img src={aestheticFood} className='aboutus__element-image'></img>
                <p className='aboutus__element-text'>Мы семейный ресторан и в нашем меню есть блюда на любой вкус:
                    шашлык, стейки, бургеры,пицца,роллы,закуски,салаты,десерты собственного производста и многое другое.
                </p>
            </div>
            <div className='aboutus-title-container'>
                <h2 className='aboutus-title'>С нами на 1 этаже находтся</h2>
                <p>&#9660; &#9660; &#9660;</p>
            </div>
            <div className='aboutus__element'>
                <img src={pixelPark} className='aboutus__element-image'></img>
                <p className='aboutus__element-text'><h3 className='aboutus__element-title'>Pixel Park:</h3>
                lounge zone с приятной атмосферой игровыми консолями,ретро консолями, компьютерами и VR.Место где могут отдохнуть дети и взрослые.</p>
            </div>
            <div className='aboutus__element'>
                <img src={bowling} className='aboutus__element-image'></img>
                <p className='aboutus__element-text'><h3 className='aboutus__element-title'>Bowling:</h3>
                 А так же бильярд,настольный тенис, аэро-хокей и дартс.
                </p>
            </div>
            <div className='aboutus__element'>
                <img src={slastipark} className='aboutus__element-image'></img>
                <p className='aboutus__element-text'><h3 className='aboutus__element-title'>СЛАСТИ ПАРК:</h3>
                Детский развлекательный центр - 1500 кв.м. развлечений для детей! В центре 13 игровых зон, среди которых: батуты, лабиринты, тарзанки, тюбинги, сухой бассейн, радужная сеть, косагор, нерф-арена и многое другое. Отдельное пространство для самых маленьких посетителей! Присмотр осуществляют операторы с педагогическим образованием и опытом работы с детьми.</p>
            </div>
        </section>
    );
}

export default AboutUs;