import React, {useContext, useState, useEffect} from 'react'
import GlobalContext from '../../../context/GlobalContext.jsx'
import { Form, Textarea, TipsWrapper} from './styles.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { Tip } from '../../elements/tip/Tip.jsx'
import { ButtonsWrapper } from '../../elements/buttons-wrapper/ButtonsWrapper.jsx'
import StyledButton from '../../elements/button/Button.jsx'
import { formValidation } from '../../../validation/formValidation.jsx'
import Modal from '../modal/Modal.jsx'
import ModalError from '../modal-error/ModalError.jsx'


export default function FormThird({isThirdStep}) {
  const {setThirdStep, setSecondStep, formData, setFormData} = useContext(GlobalContext)
  const [about, setAbout] = useState('' + formData.about)
  const [symbols, setSymbols] = useState(0)
  const [success, setSuccess] = useState(false)

  const [errors, setErrors] = useState({})
  const {modalError, showModalError} = useContext(GlobalContext)

  const handleChange = (evt) => {
    setAbout(evt.target.value)
    setFormData((prev) => {
      return { ...prev, about: about}
    })
  }

  useEffect(() => {
    formValidation.validate(formData, {abortEarly: false})
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
}, [formData]);

  const validateForm = async (e) => {
    e.preventDefault()

    let data = formData  

    const isValid = await formValidation.isValid(data)

    if (isValid) {
      console.log('Форма отправлена')

      fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setTimeout(()=> setSuccess(true), 500 )


     
    } else {
      console.log('Форма НЕ отправлена')
      showModalError(true)

    }
  }

 useEffect((e) => {
  const value = formData.about.replace(/\s+/g, '').length
  setSymbols(value)
 }, [])

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    const characterCount = value.replace(/\s+/g, '').length;
    setSymbols(characterCount)
  }

  const handlePrevStep = () => {
    setSecondStep(true)
    setThirdStep(false)
  }

  const handleNextStep = () => {
    console.log('проверка формы')
  }

  return isThirdStep && (
    <Form onSubmit={(e) => validateForm(e)}>
      <InputName>About</InputName>
      <Textarea 
        value={about}
        name='about'
        required
        onChange={(e)=> {
        handleChange(e)
        handleTextareaChange(e)
      }}></Textarea>
      <TipsWrapper>
        <Tip>Tip: максимальное кол-во символов - 200</Tip>
        <Tip style={{color: 'blue'}}>Символов: {symbols}</Tip>
      </TipsWrapper>


      <ButtonsWrapper>
        <StyledButton as='button' type='button' $next={false} onClick={handlePrevStep}>Назад</StyledButton>
        <StyledButton as='button' type='submit' $next={true} onClick={handleNextStep}>Далее</StyledButton>
      </ButtonsWrapper>  
      <Modal isShow={success}/>
      <ModalError isShow={modalError} errors={errors}/>
    </Form>

  )
}
