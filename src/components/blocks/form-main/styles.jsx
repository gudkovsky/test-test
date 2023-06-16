import styled from 'styled-components'
import chevron from '../../../assets/drop-chevron.svg'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-top: 24px;
`


export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 88px;
`

export const SexInput = styled.button`
  position: relative;
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
  background-color: ${(props) => props.theme.grayBg};
  border-color: ${(props) => props.theme.grayBorder};
  color: ${(props) => props.theme.grayText};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 4px);
    right: 16px;
    height: 8px;
    width: 12px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${chevron});
  }
`