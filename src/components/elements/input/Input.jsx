import React from 'react'
import { StyledInput } from './styles.jsx'

export default function Input({...props}) {
  return (
    <StyledInput type={props.type} placeholder={props.placeholder} value={props.value}/>
  )
}
