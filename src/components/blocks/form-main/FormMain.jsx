import React, {useContext, useState, useEffect} from 'react'
import GlobalContext from '../../../context/GlobalContext.jsx'
import Label from '../../elements/label/Label.jsx'
import Input from '../../elements/input/Input.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { Tip } from '../../elements/tip/Tip.jsx'
import { Form, SelectTip, SelectTitle, SelectWrapper, SexInput, OptionsList, Option} from './styles.jsx'
import { ButtonsWrapper } from '../../elements/buttons-wrapper/ButtonsWrapper.jsx'
import StyledButton from '../../elements/button/Button.jsx'
import { formValidation } from '../../../validation/formValidation.jsx'

export default function FormMain({isFirstStep}) {
  const {setFirstStep, setSecondStep, setFormData, formData} = useContext(GlobalContext)
  const [showDropdown, setShowDropdown] = useState(false)
  const [sexOption, setSexOption] = useState('')
  const [errors, setErrors] = useState({});

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
console.log(errors)

  const handleNextStep = () => {
    setFirstStep(false)
    setSecondStep(true)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  const handleSexChoice = (evt) => {
    const name = evt.target.dataset.name
    const value = evt.target.textContent
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }

  // const enableButton = formData.name && formData.sername && formData.nickname && formData.sex

  return isFirstStep && (
    <Form onSubmit={(e) => (e)}>
      <Label>
        <InputName>Nickname</InputName>
        <Input type='text' placeholder='Placeholder' name='nickname' onChange={handleChange} value={formData.nickname} required/>
        <Tip>Tip{errors.nickname && <span>: заполните это поле</span>}</Tip>
      </Label>

      <Label>
        <InputName>Name</InputName>
        <Input type='text' placeholder='Placeholder' name='name' onChange={handleChange} value={formData.name} required/>
        <Tip>Tip{errors.name  && <span>: заполните это поле</span>}</Tip>
      </Label>

      <Label>
        <InputName>Sername</InputName>
        <Input type='text' placeholder='Placeholder' name='sername' onChange={handleChange } value={formData.sername} required/>
        <Tip>Tip{errors.sername && <span>: заполните это поле</span>}</Tip>
      </Label>

      <input type='hidden' value={sexOption} name='sex' required/>
      
      <SelectWrapper >
        <SelectTitle >Sex</SelectTitle>
        <SexInput type='button' onClick={() => setShowDropdown(!showDropdown)}>{ formData.sex || sexOption || 'Не выбрано'}</SexInput>
        <OptionsList $isActive={showDropdown}>
        <Option onClick={(e) => {
          setSexOption(e.target.textContent)
          setShowDropdown(!showDropdown)
          handleSexChoice(e)
        }} 
          data-name='sex'>
            male
          </Option>
          <Option onClick={(e) => {
          setSexOption(e.target.textContent)
          setShowDropdown(!showDropdown)
          handleSexChoice(e)
          }} 
          data-name='sex'>
            female
          </Option>
        </OptionsList>
        <input type='hidden'/>
        <SelectTip title='yes'>Tip{errors.sex && <span>: выберите опцию</span>}</SelectTip>
      </SelectWrapper>

      <ButtonsWrapper style={{marginTop: '40px'}}>
        <StyledButton to='/' $next={false}>Назад</StyledButton>
        <StyledButton as='button' type='submit' $next={true} onClick={handleNextStep}>Далее</StyledButton>
      </ButtonsWrapper>   
    </Form>
  )
}
