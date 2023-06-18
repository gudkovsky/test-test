import React from "react"

const GlobalContext = React.createContext({
  firstStep: true,
  setFirstStep: () => {},
  secondStep: false,
  setSecondStep: () => {},
  thirdStep: false,
  setThirdStep: () => {},
  formData: {},
  setFormData: () => {}
  // formData: [] сюда нужно будет закидывать все данные из форм
})

export default GlobalContext