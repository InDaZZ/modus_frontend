function AdminForm({ submit, inputOnChange, formHeading, buttonText }) {
    return (
        <form className='adminpage__form' onSubmit={submit}>
            <h1 className='adminpage__form-heading'>{formHeading}</h1>
            <label htmlFor="name" className="popup__field">
                <input className='adminpage__form-input' onChange={inputOnChange} type='text' name="name" id="name" placeholder='Название' required='true'></input>
            </label>
            <label htmlFor="image" className="popup__field">
                <input className='adminpage__form-input' onChange={inputOnChange} type='text' name="image" id="image" placeholder='Изображение' required='true'></input>
            </label>
            <label htmlFor="proteins" className="popup__field">
                <input className='adminpage__form-input' onChange={inputOnChange} type='text' name="proteins" id="proteins" placeholder='Белки' required='true'></input>
            </label>
            <label htmlFor="fats" className="popup__field">
                <input className='adminpage__form-input' onChange={inputOnChange} type='text' name="fats" id="fats" placeholder='Жиры' required='true'></input>
            </label>
            <label htmlFor="carbohydrates" className="popup__field">
                <input className='adminpage__form-input' onChange={inputOnChange} type='text' name="carbohydrates" id="carbohydrates" placeholder='Углеводы' required='true'></input>
            </label>
            <label htmlFor="availability" className="popup__field">
                <select name="availability" id="city-select" className='adminpage__form-input' onChange={inputOnChange}>
                    <option value='true'>В Наличии</option>
                    <option value='false'>В СтопЛисте</option>
                </select>
            </label>
            <label htmlFor="cost" className="popup__field">
                <input className='adminpage__form-input' onChange={inputOnChange} type='text' name="cost" id="cost" placeholder='Цена' required='true'></input>
            </label>
            <label htmlFor="sale" className="popup__field">
                <input className='adminpage__form-input' onChange={inputOnChange} type='text' name="sale" id="sale" placeholder='Скидка' required='true'></input>
            </label>
            <button type="submit" className={`popup__button-submit`}>{buttonText}</button>
        </form>
    )
}

export default AdminForm;