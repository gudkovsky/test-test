import React, {useContext} from 'react'
import GlobalContext from '../../../context/GlobalContext.jsx'
import {Form} from './styles.jsx'
import Advantages from '../advantages/Advantages.jsx'
import CheckboxGroup from '../checkbox-group/CheckboxGroup.jsx'
import RadioGroup from '../radio-group/RadioGroup.jsx'
import { ButtonsWrapper } from '../../elements/buttons-wrapper/ButtonsWrapper.jsx'
import StyledButton from '../../elements/button/Button.jsx'
// import { secondValidation } from '../../../validation/secondValidation.jsx'

export default function FormSecond({isSecondStep}) {
  const {setFirstStep, setThirdStep, setSecondStep} = useContext(GlobalContext)



  const handlePrevStep = () => {
    setSecondStep(false)
    setFirstStep(true)
  }

  const handleNextStep = () => {
    setSecondStep(false)
    setThirdStep(true)
  }

  return isSecondStep && (
    <Form onSubmit={(e) => console.log(e)}>
      <Advantages />
      <CheckboxGroup />
      <RadioGroup />

      <ButtonsWrapper>
        <StyledButton as='button' type='button' $next={false} onClick={handlePrevStep}>Назад</StyledButton>
        <StyledButton as='button' type='button' $next={true} onClick={handleNextStep}>Далее</StyledButton>
      </ButtonsWrapper>  
    </Form>
  )
}
