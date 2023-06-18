import styled, {css} from 'styled-components'
import check from '../../../assets/check.png'

export const ProgressRange = styled.div`
  position: relative;
  height: 8px;
  width: 100%;
  max-width: 680px;
  margin-bottom: 102px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.grayProgress};
`

export const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: ${props => props.$isFirstStep ? '100%' : props.$isSecondStep ? '50%' : props.$isThirdStep ? '0' : ''};
  background-color: ${(props) => props.theme.bluePrimary};
  transition: 2s;
  transition-timing-function: ease-in-out;
  border-radius: 5px;
  /* ${(props) => 
    props.isFirstStep ? (
      css`
        right: 100%;
      }`) : 
    props.isSecondStep ? (
      css`
        right: 50%;
      }`) :
    props.isThirdStep ? (
      css`
        right: 0;
      }`) :  ''
 } */
`

const Step = styled.span`
  position: absolute;
  top: calc(50% - 8px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;

  background-color: ${(props) => props.$isDone ? props.theme.bluePrimary : props.$isCurrent ? props.theme.bluePrimary : props.$isDisabled ? props.theme.grayStep : 'gray'};
  background-image: ${(props) => props.$isDone ? `url(${check})` : 'none'};
  background-repeat: no-repeat;
  background-position: center;

  ${(props) => 
    props.$isCurrent ? (
      css`
        &::before {
        content: '';
        position: static;
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${props => props.theme.whitePrimary};
      }`) : ''
 }

  &::after {
    position: absolute;
    bottom: -28px;
    font-weight: 600;
    color: ${(props) => props.$isDone ? props.theme.bluePrimary : props.$isCurrent ? props.theme.bluePrimary : props.theme.grayStep};
  }
`

export const FirstStep = styled(Step)`
left: 0;
  &::after {
    content: '1';
    left: 0;
  }
`

export const SecondStep = styled(Step)`
left: calc(50% - 8px);
  &::after {
    content: '2';
  }
`

export const ThirdStep = styled(Step)`
right: 0;
  &::after {
    content: '3';
    right: 0;
  }
`