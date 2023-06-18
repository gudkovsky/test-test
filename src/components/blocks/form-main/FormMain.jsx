import React, {useContext, useState} from 'react'
import GlobalContext from '../../../context/GlobalContext.jsx'
import Label from '../../elements/label/Label.jsx'
import Input from '../../elements/input/Input.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { Tip } from '../../elements/tip/Tip.jsx'
// import { StyledButton } from './styles.jsx'
import { Main as StyledMain, SelectTip, SelectTitle, SelectWrapper, SexInput, OptionsList, Option} from './styles.jsx'
import { ButtonsWrapper } from '../../elements/buttons-wrapper/ButtonsWrapper.jsx'
import StyledButton from '../../elements/button/Button.jsx'

export default function FormMain({isFirstStep}) {
  const {setFirstStep, setSecondStep, setFormData, formData} = useContext(GlobalContext)
  const [showDropdown, setShowDropdown] = useState(false)
  const [sexOption, setSexOption] = useState(null)

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

  return isFirstStep && (
    <StyledMain>
      <Label>
        <InputName>Nickname</InputName>
        <Input type='text' placeholder='Placeholder' name='nickname' onChange={handleChange} value={formData.nickname}/>
        <Tip>Tip</Tip>
      </Label>

      <Label>
        <InputName>Name</InputName>
        <Input type='text' placeholder='Placeholder' name='name' onChange={handleChange} value={formData.name}/>
        <Tip>Tip</Tip>
      </Label>

      <Label>
        <InputName>Sername</InputName>
        <Input type='text' placeholder='Placeholder' name='sername' onChange={handleChange } value={formData.sername}/>
        <Tip>Tip</Tip>
      </Label>
      
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
        <SelectTip title='yes'>Tip</SelectTip>
      </SelectWrapper>

      <ButtonsWrapper style={{marginTop: '40px'}}>
        <StyledButton to='/' $next={false}>Назад</StyledButton>
        <StyledButton as='button' type='button' $next={true} onClick={handleNextStep}>Далее</StyledButton>
      </ButtonsWrapper>   
    </StyledMain>
  )
}
