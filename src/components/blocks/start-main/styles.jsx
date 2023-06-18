import styled from 'styled-components'
import StyledButton from '../../elements/button/Button.jsx'
import MaskedInput from 'react-input-mask';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-top: 24px;
`

export const Button = styled(StyledButton)`
  margin-top: 48px;
`

export const StyledInput = styled(MaskedInput)`
  display: flex;
  height: auto;
  width: 45%;
  max-width: 400px;
  padding: 12px;
  font-family: 'SB Sans Interface', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) => props.theme.whitePrimary};
  border-color: ${(props) => props.theme.grayBorder};
  color: ${(props) => props.theme.blackPrimary};
  
  &::placeholder {
    color: ${(props) => props.theme.grayText};
  }
`