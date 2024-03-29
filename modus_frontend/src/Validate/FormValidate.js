import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';


const useFormAndValidation = (initialValues = {}, initialErrors = {}, initialValid = false) => {
    const location = useLocation();
    const currLocation = location.pathname.toLowerCase();
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setValid] = useState(initialValid);

    const handleChange = (evt) => {
        const { name, value, validationMessage } = evt.target;
        setErrors({ ...errors, [name]: validationMessage });
        setValues({ ...values, [name]: value });
        setValid(evt.target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setValid(newIsValid);
        },
        [setValues, setErrors, setValid]
    );

    return { values, errors, isValid, handleChange, resetForm, setValues, setValid, setErrors };
};

export default useFormAndValidation;