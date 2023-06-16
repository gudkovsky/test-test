import React from 'react'
import { Main as StyledMain, Textarea} from './styles.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { Tip } from '../../elements/tip/Tip.jsx'

export default function FormThird() {
  return (
    <StyledMain>
      <InputName>About</InputName>
      <Textarea />
      <Tip>Tip</Tip>
    </StyledMain>
  )
}
