import React from 'react'
import {FormWrapper, ButtonsWrapper} from './styles.jsx'
import FormHeader from '../../blocks/form-header/FormHeader.jsx'
import FormMain from '../../blocks/form-main/FormMain.jsx'
import StyledButton from '../../elements/button/Button.jsx'
import FormSecond from '../../blocks/form-second/FormSecond.jsx'
import FormThird from '../../blocks/form-third/FormThird.jsx'
import Modal from '../../blocks/modal/Modal.jsx'
import ModalError from '../../blocks/modal-error/ModalError.jsx'

export default function FormPage({FormPageShown}) {
  return FormPageShown && (
    <FormWrapper>
      <FormHeader />
      <FormMain />
      <FormSecond/>
      <FormThird/>
      <ButtonsWrapper>
        <StyledButton $next={false}>Назад</StyledButton>
        <StyledButton $next={true}>Далее</StyledButton>
      </ButtonsWrapper>
      <Modal isShow={false}/>
      <ModalError isShow={true}/>
    </FormWrapper>
  )
}
