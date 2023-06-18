import React, {useState, useContext} from 'react'
import Input from '../../elements/input/Input.jsx'
import InputName from '../../elements/input-name/InputName.jsx'
import { AdvantagesWrapper, Row, Delete } from './styles.jsx'
import icon from '../../../assets/delete.png'
import AddButton from '../../elements/add-button/AddButton.jsx'
import GlobalContext from '../../../context/GlobalContext.jsx'

export default function Advantages() {
  const {formData, setFormData} = useContext(GlobalContext)
  // const [advantages, setAdvantages] = useState(new Array(3).fill(''))

  const handleAddAdvantage = (e) => {
    const dataCopy = [...formData.advantages, '']
    setFormData((prev) => {
      return { ...prev, advantages: dataCopy}
    })
  }

  const handleDeleteItem = (i) => {
    const dataCopy = [...formData.advantages]
    dataCopy.splice(i, 1)
    setFormData((prev) => {
      return { ...prev, advantages: dataCopy}
    })
  }

  const handleAdvantageChange = (evt, i) => {
    const value = evt.target.value
    let dataCopy = [...formData.advantages]
    dataCopy[i] = value

    setFormData((prev) => {
      return { ...prev, advantages: dataCopy}
    })
  }

  return (
    <AdvantagesWrapper>
      <InputName>Advantages</InputName>
      {
        formData.advantages.map((value, index) => {
         return (
        <Row key={index}>
          <Input placeholder="Placeholder" type='text' value={value}
           onChange={(event) => {
            handleAdvantageChange(event, index)
          }
            } 
             name='advantages'/>
          <Delete onClick={() => handleDeleteItem(index)}>
            <img src={icon} alt="delete" />
          </Delete>
          </Row>
        )})
      }
      <AddButton onClick={handleAddAdvantage}>+</AddButton>
    </AdvantagesWrapper>
  )
}
