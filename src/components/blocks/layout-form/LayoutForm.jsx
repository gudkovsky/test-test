import React from 'react'
import { Outlet } from "react-router-dom";
import FormHeader from '../form-header/FormHeader.jsx'
import { FormWrapper} from './styles.jsx';


export default function LayoutForm() {
  return (
    <FormWrapper>
        <FormHeader />
        <Outlet/>
    </FormWrapper>
  )
}
