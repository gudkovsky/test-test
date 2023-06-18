import React from 'react'

import {Overlay, ModalWrapper, Title} from './styles.jsx'
import StyledButton from '../../elements/button/Button.jsx'


export default function Modal({isShow}) {
  return isShow ? (
    <Overlay>
      <ModalWrapper>
      <Title>Форма успешно отправлена</Title>
      <StyledButton $next={true} to='/' >На главную</StyledButton>
      </ModalWrapper>
    </Overlay>
  ) : null
}
