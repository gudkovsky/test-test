import React, {useState} from 'react'
import {SelectTip, SelectTitle, SelectWrapper, SexInput, OptionsList, Option } from './styles.jsx'

export default function CustomSelect() {
  const [showDropdown, setShowDropdown] = useState(false)

  function handleOptionChoice (e) {
    console.log('В компоненте custom select переданы данные: ', e.target.dataset.value)
    setShowDropdown(!showDropdown)
  }

  return (
    <SelectWrapper >
      <SelectTitle >Sex</SelectTitle>
      <SexInput type='button' onClick={() => setShowDropdown(!showDropdown)}>Не выбрано</SexInput>
      <OptionsList isActive={showDropdown}>
        <Option onClick={handleOptionChoice}
        data-value='0'>male</Option>
        <Option onClick={handleOptionChoice} data-value='1'>female</Option>
      </OptionsList>
      <input type='hidden'/>
      <SelectTip title='yes'>Tip</SelectTip>
    </SelectWrapper>
  )
}
