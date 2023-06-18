import React from 'react'
import Label from '../../elements/label/Label.jsx'
import Input from '../../elements/input/Input.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
// import { StyledButton } from './styles.jsx'
import { Main as StyledMain, Button} from './styles.jsx'

export default function Main() {
  return (
    <StyledMain>
      <Label>
        <InputName>Номер телефона</InputName>
        <Input type='text' placeholder='+7 999 999-99-99'/>
      </Label>

      <Label>
        <InputName>Email</InputName>
        <Input type='email' placeholder='tim.jennings@example.com'/>
      </Label>
 
      <Button to='/create' $next={true} style={{alignSelf: 'flex-start'} }>Начать</Button>
    
    </StyledMain>
  )
}
