import styled from 'styled-components'
import check from '../../../assets/check.png'
import current from '../../../assets/currentStep.svg'

export const ProgressRange = styled.div`
  position: relative;
  height: 8px;
  width: 100%;
  max-width: 680px;
  margin-bottom: 102px;
  background-color: ${(props) => props.theme.grayProgress};
`

export const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.bluePrimary};
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

  background-color: ${(props) => props.isDone ? props.theme.bluePrimary : props.isCurrent ? props.theme.bluePrimary : props.theme.grayStep};
  background-image: ${(props) => props.isDone ? `url(${check})` : props.isCurrent ? `url(${current})` : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: fill;

  &::after {
    position: absolute;
    bottom: -28px;
    font-weight: 600;
    color: ${(props) => props.isDone ? props.theme.bluePrimary : props.isCurrent ? props.theme.bluePrimary : props.theme.grayStep};
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