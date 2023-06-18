import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-top: 24px;
`
export const Textarea = styled.textarea`
  width: 100%;
  min-height: 84px;
  resize: vertical;
  border: 1px solid ${props => props.theme.grayBorder};
  border-radius: 4px;

  padding: 12px;
  &::placeholder {
    color: ${(props) => props.theme.grayText};
  }

  &:focus {
    outline: none
  }
`

export const TipsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

