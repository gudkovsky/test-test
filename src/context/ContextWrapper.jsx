import React, {useState} from "react";
import GlobalContext from './GlobalContext.jsx';

export default function ContextWrapper(props) {
  const [firstStep, setFirstStep] = useState(true)
  const [secondStep, setSecondStep] = useState(false)
  const [thirdStep, setThirdStep] = useState(false)
  const [formData, setFormData] = useState(
    {
      nickname: '',
      name: '',
      sername: '',
      sex: '',
      advantages: ['', '', ''],
      checkbox: '',
      radio: '',
      about: ''
    }
  )

  return (
    <GlobalContext.Provider value={{
      firstStep, setFirstStep, secondStep, setSecondStep, thirdStep, setThirdStep, formData, setFormData
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}