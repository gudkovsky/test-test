import styled from 'styled-components'
import chevron from '../../../assets/drop-chevron.svg'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-top: 24px;
`

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  cursor: pointer;
`

export const SelectTitle = styled.span`
  font-family: 'SB Sans Interface', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.blackPrimary};
`

export const SelectTip = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.grayText};
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
  background-color: ${(props) => props.theme.whitePrimary};
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

export const OptionsList = styled.div`
  position: absolute;
  top: 76px;
  left: 0;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 45%;
  max-width: 400px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  transition: 0.5s;
  transform: ${props => props.$isActive ? `scaleY(1)` : `scaleY(0)`};;
  transform-origin: top;
`

export const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: ${props => props.theme.grayBg};
  }
`