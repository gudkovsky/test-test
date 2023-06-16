import React from 'react'
import {Overlay, ModalWrapper, Title, Header, ExitSpan, Footer} from './styles.jsx'
import StyledButton from '../../elements/button/Button.jsx'

export default function ModalError({isShow}) {
  return isShow ? (
    <Overlay>
      <ModalWrapper>
      <Header>
        <Title>Ошибка</Title>
        <ExitSpan>+</ExitSpan>
      </Header>
      <Footer>
        <StyledButton $next={true}>Закрыть</StyledButton>
      </Footer>

      </ModalWrapper>
    </Overlay>
  ) : null
}
