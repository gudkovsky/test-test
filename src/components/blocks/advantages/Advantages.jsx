import React from 'react'
import Input from '../../elements/input/Input.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { AdvantagesWrapper, Row, Delete } from './styles.jsx'
import icon from '../../../assets/delete.png'
import AddButton from '../../elements/add-button/AddButton.jsx'

export default function Advantages() {
  return (
    <AdvantagesWrapper>
      <InputName>Advantages</InputName>
      <Row>
        <Input placeholder="Placeholder"/>
        <Delete>
          <img src={icon} alt="delete" />
        </Delete>
      </Row>
      <Row>
        <Input placeholder="Placeholder"/>
        <Delete>
          <img src={icon} alt="delete" />
        </Delete>
      </Row>
      <Row>
        <Input placeholder="Placeholder"/>
        <Delete>
          <img src={icon} alt="delete" />
        </Delete>
      </Row>
      <AddButton>+</AddButton>
    </AdvantagesWrapper>
  )
}
