import React from 'react'
// import { StyledButton } from './styles.jsx'
import { Main as StyledMain} from './styles.jsx'
import Advantages from '../advantages/Advantages.jsx'
import CheckboxGroup from '../checkbox-group/CheckboxGroup.jsx'
import RadioGroup from '../radio-group/RadioGroup.jsx'

export default function FormSecond() {
  return (
    <StyledMain>
      <Advantages />
      <CheckboxGroup />
      <RadioGroup />
    </StyledMain>
  )
}
