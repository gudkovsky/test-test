import React, {useContext, useState, useEffect} from 'react'
import Label from '../../elements/label/Label.jsx'
import Input from '../../elements/input/Input.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import GlobalContext from '../../../context/GlobalContext.jsx'
import {Form, Button, StyledInput} from './styles.jsx'
import { startValidation } from '../../../validation/startValidation.jsx'
import { Tip } from '../../elements/tip/Tip.jsx'

export default function Main() {
  const {loginData, setLoginData} = useContext(GlobalContext)
  const [phone, setPhone] = useState(loginData.phone)
  const [email, setEmail] = useState(loginData.email)

  const [errors, setErrors] = useState({});

  useEffect(() => {
    startValidation.validate(loginData, {abortEarly: false})
    .then(() => {
      setErrors({});
    })
    .catch((err) => {
      const newErrors = {};

      err.inner.forEach((validationError) => {
        newErrors[validationError.path] = validationError.message;
      });

      setErrors(newErrors);
    });
}, [loginData]);

  console.log(errors)
  const validateForm = async (e) => {
    e.preventDefault()

    let formData = {
      phone:  e.target.phone.value,
      email:  e.target.email.value
    }

    const isValid = await startValidation.isValid(formData)

    if (isValid) {
      document.location.href='/create';
    } else {
      console.log('bad')
    }

    console.log(isValid)
  }

  const handlePhoneChange = (e) => {
    const value = (e.target.value)
    setPhone(value)
    setLoginData((prev) => {
      return { ...prev, phone: value}
    })
  }

  const handleEmailChange = (e) => {
    const value = (e.target.value)
    setEmail(value)
    setLoginData((prev) => {
      return { ...prev, email: value}
    })
  }

  return (
    <Form onSubmit={(e) => validateForm(e)}>
      <Label>
        <InputName>Номер телефона</InputName>
        <StyledInput type='text' placeholder='+7 999 999-99-99' id='phone-input' mask="+7 (999) 999-99-99" onChange={(evt) => handlePhoneChange(evt)} value={phone} name='phone' required/>
      </Label>

      <Label  >
        <InputName>Email</InputName>
        <Input type='email' name='email' placeholder='tim.jennings@example.com' onChange={(evt) => handleEmailChange(evt)} value={email} required/>
      </Label>
      {loginData.email && errors.email && <Tip>Заполните поле email по шаблону email@email.domain </Tip>}

      <Button to='/create' $next={true} style={{alignSelf: 'flex-start'} }>Начать</Button>
    
    </Form>
  )
}
