import React, { useContext, useState } from 'react'
import InputName from '../../elements/input-name/InputName.jsx'
import RadioButton from '../../elements/radio-button/RadioButton.jsx'
import { RadioWrapper } from './styled.jsx'
import GlobalContext from '../../../context/GlobalContext.jsx'

export default function RadioGroup() {
  const {formData, setFormData} = useContext(GlobalContext)
  const [radioList, setRadiolist] = useState(formData.radio)
  

  const handleChange = function (e) {
    const {name, value} = e.target

    setRadiolist(value)
    setFormData((prev) => ({
       ...prev, [name]: value
    }))

  }

  return (
    <RadioWrapper>
      <InputName>Checkbox group</InputName>
      <RadioButton
      value={1}
      checked={radioList === '1'} 
      onChange={(evt) => {
        handleChange(evt)
      }}></RadioButton>
      <RadioButton 
      value={2}
      checked={radioList === '2'}  
      onChange={(evt) => {
        handleChange(evt)
      }}></RadioButton>
      <RadioButton 
        value={3}
        checked={radioList === '3'} 
        onChange={(evt) => {
        handleChange(evt)
      }}></RadioButton>
    </RadioWrapper>
  )
}
