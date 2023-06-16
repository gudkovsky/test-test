import styled from 'styled-components'

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

export const RadioSpan = styled.span`
  display: flex;
  width: 16px;
  height: 16px;
  border: 1px solid ${props => props.theme.grayBorder};
  border-radius: 50%;

  ${HiddenInput}:checked + & {
    background-color: ${(props) => props.theme.grayBorder};
    outline: 2px solid white;
    outline-offset: -4px;
  }
`;