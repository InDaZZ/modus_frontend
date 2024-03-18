import { useSelector } from 'react-redux';
import Popup from '../PopupForm/Popup.js';
import Basket from '../Basket/Basket';
import { useBasket } from '../hooks/useBasket.js';
import { useEffect, useState } from 'react';
import { useAction } from '../hooks/useActions.js';
import { onlyNumbersKey } from '../Functions/onlyNumbersKey.js';
import useFormAndValidation from '../Validate/FormValidate.js';


function BasketPopup({ togglePopup, onSubmit, buttonText }) {

    const { values,
        errors,
        isValid,
        handleChange,
        resetForm,
        setValues,
        setValid,
        setErrors } = useFormAndValidation();
    const isOpen = useSelector(state => state.basketPopupHandle.basket)
    console.log(isOpen)

    function onClose() {
        togglePopup({ basket: false })
        setBasketInfo(prevState => prevState ? !prevState : prevState)

    }

    const [phoneStartedValue, setPhoneStartedValue] = useState('+7')
    const [basketInfo, setBasketInfo] = useState(false)
    const [hidenFormElement, setHidenFormElement] = useState(false)
    const basket = useBasket()
    const { clearBasket } = useAction()

    useEffect(() => { basket.length === 0 ? setHidenFormElement(true) : setHidenFormElement(false) }, [basket]);

    function handleChangePhone(evt) {
        const { value, name } = evt.target;
        handleChange(evt)

        if (errors[name] !== '') {
            setErrors((error => {
                return { ...error, number: 'Введите номер в формате +7. Например: +79993224599' }
            }
            ))
        }
        if (errors[name] === '') {
            setValid(true)
            setErrors((error => {
                return { ...error, number: '' }
            }
            ))
        }
        if (value === '' || value === '+') {
            setValues((phone => {
                return { ...phone, number: '+7' }
            }
            ))
        }

        if (value === '+78' || value === '+7+' || value === '+78') {
            const phoneNumer = value.slice(0, 2)
            setValues((phone => {
                return { ...phone, number: `${phoneNumer}` }
            }
            ))

        }
        if (value[0] === '9') {
            setValues((phone => {
                return { ...phone, number: `+7${value}` }
            }))

        }
        if (value[2] === '7') {

            setValues((phone => {
                return { ...phone, number: `+7` }
            }))
        }

        return setPhoneStartedValue(value)
    }

    function hendleSubmit(evt) {


        evt.preventDefault()
        onSubmit(basket, phoneStartedValue)
        setBasketInfo('Заказ успешно оформлен, в ближайшее времяя мы свзяжемся с вами для уточнения деталей')
        clearBasket()
        setTimeout(() => {
            togglePopup(null)
            setBasketInfo(false)
        }, 5000)

    }

    console.log(errors.number)
    return (
        <Popup isOpen={isOpen} togglePopup={togglePopup} onSubmit={onSubmit} buttonText={buttonText} onClose={onClose}>
            {(basketInfo !== false) ?
                <div className="popup__order_success">
                    <p className="popup__order_success-text">{basketInfo}</p>
                    <span className="popup__order_success-emoji">&#9989;</span>
                </div> : <>
                    <Basket />
                    <form onSubmit={hendleSubmit}>
                        <input className={hidenFormElement ? "popup__basket-input_hiden" : "popup__basket-input"} type="tel" name="number" placeholder="+79" minLength="12" maxLength="12" value={values.number || ''} onChange={handleChangePhone} onKeyDown={onlyNumbersKey} required='true'>
                        </input>
                        <span className={isValid ? `popup__error` : `popup__error popup__error_active`}>{errors.number}</span>
                        <button disabled={!isValid} type="submit" className={hidenFormElement ? `popup__button-submit_hiden` : isValid ? `popup__button-submit` : `popup__button-submit popup__button_inactive`}  >{buttonText}</button>
                    </form>
                </>}
        </Popup >
    )
}

export default BasketPopup;