import React, {useContext, useState} from 'react'
import GlobalContext from '../../../context/GlobalContext.jsx'
import { Main as StyledMain, Textarea} from './styles.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { Tip } from '../../elements/tip/Tip.jsx'
import { ButtonsWrapper } from '../../elements/buttons-wrapper/ButtonsWrapper.jsx'
import StyledButton from '../../elements/button/Button.jsx'

export default function FormThird({isThirdStep}) {
  const {setThirdStep, setSecondStep, formData, setFormData} = useContext(GlobalContext)
  const [about, setAbout] = useState('' + formData.about)
  console.log(about)

  const handleChange = (evt) => {
    console.log('About changed')
    setAbout(evt.target.value)
    setFormData((prev) => {
      return { ...prev, about: about}
    })
  }

  const handlePrevStep = () => {
    setSecondStep(true)
    setThirdStep(false)
  }

  const handleNextStep = () => {
    console.log('Форма отправлена')
  }

  return isThirdStep && (
    <StyledMain>
      <InputName>About</InputName>
      <Textarea 
        value={about}
        onChange={(e)=> {
        console.log(about)
        handleChange(e)
      }}></Textarea>
      <Tip>Tip</Tip>

      <ButtonsWrapper>
        <StyledButton as='button' type='button' $next={false} onClick={handlePrevStep}>Назад</StyledButton>
        <StyledButton as='button' type='button' $next={true} onClick={handleNextStep}>Далее</StyledButton>
      </ButtonsWrapper>  
    </StyledMain>
  )
}
