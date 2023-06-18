import React, {useContext} from 'react'
import GlobalContext from '../../../context/GlobalContext.jsx'
import {Overlay, ModalWrapper, Title, Header, ExitSpan, Footer} from './styles.jsx'
import StyledButton from '../../elements/button/Button.jsx'

export default function ModalError({isShow, errors}) {
  const {showModalError} = useContext(GlobalContext)

  return isShow ? (
    <Overlay>
      <ModalWrapper>
      <Header>
        <Title>Ошибка</Title>
        <ExitSpan onClick={() => showModalError(false)}>+</ExitSpan>
      </Header>
      <div style={{marginTop: '-140px'}}>
        Ошибки в полях: {' '}
        {Object.keys(errors).join(", ")}
      </div>
      <Footer>
        <StyledButton $next={true} onClick={() => showModalError(false)}>Закрыть</StyledButton>
      </Footer>

      </ModalWrapper>
    </Overlay>
  ) : null
}
