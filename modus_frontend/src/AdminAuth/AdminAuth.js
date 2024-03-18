import Popup from '../PopupForm/Popup.js';
import useFormAndValidation from '../Validate/FormValidate.js';
import './adminAuth.css'

function AdminAuth({ submitFunc }) {
    const { values, errors, isValid, handleChange, setValues, setValid, setErrors } = useFormAndValidation();
    
    console.log(values)
    function handleSubmit(evt) {
        evt.preventDefault()
        
        submitFunc(values)
    }
    return (
        <section>
            <Popup isOpen={true}>
                <form className='adminAuth__form' onSubmit={handleSubmit}>
                    <input className='adminAuth__input' placeholder='Логин' name='name' required='true' onChange={handleChange}></input>
                    <input className='adminAuth__input' placeholder='Пароль' name='password' required='true' onChange={handleChange}></input>
                    <button className='popup__button-submit' type="submit" /* disabled={!isValid} type="submit" className={hidenFormElement ? `popup__button-submit_hiden` : isValid ? `popup__button-submit` : `popup__button-submit popup__button_inactive`}   */>Сохранить</button>
                </form>
            </Popup>
        </section>
    )
}

export default AdminAuth;