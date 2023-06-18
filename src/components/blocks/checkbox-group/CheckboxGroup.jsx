import React, { useContext, useState } from 'react'
import InputName from '../../elements/input-name/InputName.jsx'
import Checkbox from '../../elements/checkbox/Checkbox.jsx'
import { CheckboxWrapper } from './styled.jsx'
import GlobalContext from '../../../context/GlobalContext.jsx'

export default function CheckboxGroup() {
  const {formData, setFormData} = useContext(GlobalContext)
  const [checklist, setChecklist] = useState([...formData.checkbox])
  

  const handleChange = function (e) {
    const checklistCopy = [...checklist]
    const index = checklistCopy.indexOf(e.target.value)

    if (index >= 0) {
      checklistCopy.splice(index, 1)
    } else {
      checklistCopy.push(e.target.value)
      checklistCopy.sort()
    }
    console.log('checklist: ',checklist)
    setChecklist(checklistCopy)
  }

  const setData = function (e) {
    const {name} = e.target
    setFormData((prev) => {
      return { ...prev, [name]: checklist}
    })
  }

console.log(formData);
  return (
    <CheckboxWrapper>
      <InputName>Checkbox group</InputName>
      <Checkbox
      value={1}
      checked={checklist.includes('1')} 
      onChange={(evt) => {
        handleChange(evt)
        setData(evt)
      }}></Checkbox>
      <Checkbox 
      value={2}
      checked={checklist.includes('2')} 
      onChange={(evt) => {
        handleChange(evt)
        setData(evt)
      }}></Checkbox>
      <Checkbox 
        value={3}
        checked={checklist.includes('3')} 
        onChange={(evt) => {
        handleChange(evt)
        setData(evt)
      }}></Checkbox>
    </CheckboxWrapper>
  )
}
