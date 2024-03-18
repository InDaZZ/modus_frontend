function validatePhoneNumber(evt,errors,setValid,setErrors) {
    const { value, name } = evt.target;

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

    return setValues(value)
}
