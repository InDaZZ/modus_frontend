//import 'changeProductForm.css'

function ChangeProductForm({ inputOnChange, formHeading, product }) {
    return (
        <form className="change-product-from">
            <image src={product.image} alt=''></image>

            <h1 className='change-product-from-heading'>{formHeading}</h1>
            <label htmlFor="name" className="popup__field">
                <input className='change-product-from-input' onChange={inputOnChange} type='text' name="name" id="name" placeholder='Название' required='true' value={product.name || ''}></input>
            </label>

            <label htmlFor="image" className="popup__field">
                <input className='change-product-from-input' onChange={inputOnChange} type='text' name="image" id="image" placeholder='Изображение' required='true' value={product.image || ''} ></input>
            </label>

            <label htmlFor="proteins" className="popup__field">
                <input className='change-product-from-input' onChange={inputOnChange} type='text' name="proteins" id="proteins" placeholder='Белки' required='true' value={product.name || ''}></input>
            </label>

            <label htmlFor="fats" className="popup__field">
                <input className='change-product-from-input' onChange={inputOnChange} value={product.fats || ''} type='text' name="fats" id="fats" placeholder='Жиры' required='true' ></input>
            </label>

            <label htmlFor="carbohydrates" className="popup__field">
                <input className='change-product-from-input' onChange={inputOnChange} value={product.carbohydrates || ''} type='text' name="carbohydrates" id="carbohydrates" placeholder='Углеводы' required='true' ></input>
            </label>

            <label htmlFor="cost" className="popup__field">
                <input className='change-product-from-input' onChange={inputOnChange} value={product.cost || ''} type='text' name="cost" id="cost" placeholder='Цена' required='true' ></input>
            </label>

            <label htmlFor="sale" className="popup__field">
                <input className='change-product-from-input' onChange={inputOnChange} type='text' name="sale" id="sale" placeholder='Скидка' required='true' value={product.sale || ''}></input>
            </label>

            <button type="submit" className={`popup__button-submit`}>Изменить</button>

        </form>
    )
}

export default ChangeProductForm;