import React from 'react'
import InputName from '../../elements/input-name/InputName.jsx'
import { RadioWrapper } from './styled.jsx'
import RadioButton from '../../elements/radio-button/RadioButton.jsx'

export default function RadioGroup() {
  return (
    <RadioWrapper>
      <InputName>Radio group</InputName>
      <RadioButton>1</RadioButton>
      <RadioButton>2</RadioButton>
      <RadioButton>3</RadioButton>
    </RadioWrapper>
  )
}
