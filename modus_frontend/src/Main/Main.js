import './main.css';
import Category from '../Category/Category.js';
function Main({ }) {
    return (
        <main className="main">
            <Category categotyTitle={'Роллы'} categoryImage={'https://eda.yandex/images/1370147/e458659056d92f615f19b2a220dc14a2-450x300.jpeg'} categoryImageAlt={'Изображение категории - Роллы'} cost={299} time={40} linkTo={'/rolls'}></Category>
            <Category categotyTitle={'Пицца'} linkTo={'/pizzas'} categoryImage={'https://eda.yandex/images/1447609/ecc35f96851d4c5299eb3af8bf62cbb8-400x400.jpeg'} categoryImageAlt={'Изображение категории - Пицца'} cost={399} time={40}></Category>
           
        </main>

    )
}
export default Main;