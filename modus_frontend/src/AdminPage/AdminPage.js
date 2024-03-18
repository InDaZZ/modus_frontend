import './adminPage.css';
import Popup from '../PopupForm/Popup'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import useFormAndValidation from '../Validate/FormValidate';
import Header from '../Header/Header.js';
import Product from '../Product/Product.js';
import Products from '../Products/Products.js';
import AdminForm from '../Forms/AdminForms.js';
import DeleteProducts from './DeleteProducts.js';
import ChangeProductForm from '../ChangeProductForm/ChangeProductForm.js'
import { useAllRoll } from '../hooks/useAllRoll.js';
import { useAllPizzas } from '../hooks/useAllPizzas.js';
function AdminPage({ togglePopup, onClose, onSubmit, deleteProduct }) {
    const [changeableProduct, setChangeableProduct] = useState({})
    const allPizzas = useAllPizzas();
    const allRolls = useAllRoll()
    console.log(changeableProduct)
    const isOpen = useSelector(state => state.basketPopupHandle.admin);
    const isOpenChangeProduct = useSelector(state => state.basketPopupHandle.changeProduct);
    const [buttonText, setButtonText] = useState('');
    const [formHeading, setFormHeading] = useState('');
    const { values, errors, isValid, handleChange, setValues, setValid, setErrors } = useFormAndValidation();
    function onClose() {
        togglePopup({ admin: false })
    }
    function onCloseChangeProduct() {
        togglePopup({ changeProduct: false })
    }
    function onOpen(evt) {
        setFormHeading(evt.target.textContent)
        setButtonText(evt.target.textContent)
        togglePopup({ admin: true })
    }
    function onOpenChangeProduct(product) {
        togglePopup({ changeProduct: true })
        setChangeableProduct(product)
    }


    function handleSubmitAddRoll(evt) {
        evt.preventDefault()
        let admin = localStorage.getItem('adminToken')
        let newRollData = { ...values, owner: admin }
        onSubmit(newRollData)
    }


    return (
        <section className='adminpage'>

            <button className='adminpage__button adminpage__button_add adminpage__button_add-roll' onClick={onOpen}>Добавить новый ролл</button>
            <button className='adminpage__button adminpage__button_remove' onClick={onOpen}>удалить ролл</button>
            <button className='adminpage__button adminpage__button'>Добавить новый ролл</button>
            <button className='adminpage__button adminpage__button'>удалить ролл</button>
            <button className='adminpage__button adminpage__button'>Добавить новый ролл</button>
            <button className='adminpage__button adminpage__button'>удалить ролл</button>
            <DeleteProducts products={allRolls} deleteProduct={deleteProduct} changeProduct={onOpenChangeProduct}></DeleteProducts>
            <DeleteProducts products={allPizzas} deleteProduct={deleteProduct} changeProduct={onOpenChangeProduct}></DeleteProducts>


            <Popup isOpen={isOpen} togglePopup={togglePopup} /* onSubmit={onSubmit} */ onClose={onClose} popupId={'adminPopup'}>
                <AdminForm submit={handleSubmitAddRoll} inputOnChange={handleChange} formHeading={formHeading} buttonText={buttonText}></AdminForm>
            </Popup>
            <Popup isOpen={isOpenChangeProduct} togglePopup={togglePopup} /* onSubmit={onSubmit} */ onClose={onClose} popupId={'adminPopup'}>
                <ChangeProductForm product={changeableProduct}></ChangeProductForm>
            </Popup>
        </section >
    )
}
export default AdminPage;