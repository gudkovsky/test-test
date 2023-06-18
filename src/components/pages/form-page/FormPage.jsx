import React , { useState, useContext } from 'react'
import FormMain from '../../blocks/form-main/FormMain.jsx'
import FormSecond from '../../blocks/form-second/FormSecond.jsx'
import FormThird from '../../blocks/form-third/FormThird.jsx'
import Modal from '../../blocks/modal/Modal.jsx'
import ModalError from '../../blocks/modal-error/ModalError.jsx'
import GlobalContext from '../../../context/GlobalContext.jsx'

export default function FormPage() {
  const {firstStep, secondStep, thirdStep} = useContext(GlobalContext)

  return (
    <>
      <FormMain isFirstStep={firstStep}/>
      <FormSecond isSecondStep={secondStep}/>
      <FormThird isThirdStep={thirdStep}/>

      <Modal isShow={false}/>
      <ModalError isShow={false}/>
    </>
  )
}
