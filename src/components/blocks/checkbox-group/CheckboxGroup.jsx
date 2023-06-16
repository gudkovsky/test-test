import React from 'react'
import InputName from '../../elements/input-name/InputName.jsx'
import Checkbox from '../../elements/checkbox/Checkbox.jsx'
import { CheckboxWrapper } from './styled.jsx'

export default function CheckboxGroup() {
  return (
    <CheckboxWrapper>
      <InputName>Checkbox group</InputName>
      <Checkbox>1</Checkbox>
      <Checkbox>2</Checkbox>
      <Checkbox>3</Checkbox>
    </CheckboxWrapper>
  )
}
