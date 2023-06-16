import React from 'react'
import Label from '../../elements/label/Label.jsx'
import Input from '../../elements/input/Input.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { Tip } from '../../elements/tip/Tip.jsx'
// import { StyledButton } from './styles.jsx'
import { Main as StyledMain} from './styles.jsx'
import CustomSelect from '../custom-select/CustomSelect.jsx'

export default function FormMain() {
  return (
    <StyledMain>
      <Label>
        <InputName>Nickname</InputName>
        <Input type='text' placeholder='Placeholder'/>
        <Tip>Tip</Tip>
      </Label>

      <Label>
        <InputName>Name</InputName>
        <Input type='text' placeholder='Placeholder'/>
        <Tip>Tip</Tip>
      </Label>

      <Label>
        <InputName>Sername</InputName>
        <Input type='text' placeholder='Placeholder'/>
        <Tip>Tip</Tip>
      </Label>
      
      <CustomSelect />   
    </StyledMain>
  )
}
