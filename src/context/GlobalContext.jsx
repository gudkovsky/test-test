import React from "react"

const GlobalContext = React.createContext({
  firstStep: true,
  setFirstStep: () => {},
  secondStep: false,
  setSecondStep: () => {},
  thirdStep: false,
  setThirdStep: () => {},
  formData: {},
  setFormData: () => {},
  loginData: {},
  setLoginData: () => {},
  modalError: false,
  showModalError: () => {}
})

export default GlobalContext