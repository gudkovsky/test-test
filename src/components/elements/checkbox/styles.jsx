import styled from 'styled-components'
import checkmark from '../../../assets/check.png'

export const Label = styled.label`
  display: flex;
  width: fit-content;
  flex-direction: row;
  column-gap: 8px;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`

export const HiddenInput = styled.input`
  display: none;
`

export const CheckSpan = styled.span`
  display: flex;
  width: 16px;
  height: 16px;
  border: 1px solid ${props => props.theme.grayBorder};
  border-radius: 4px;

  ${HiddenInput}:checked + & {
    background-color: ${(props) => props.theme.grayBorder};
    background-image: url(${checkmark});
    background-position: center;
    background-repeat: no-repeat;
    background-size: fill;
  }
`;