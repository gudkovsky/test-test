import React, {useContext} from 'react'
import {ProgressRange, ProgressBar, FirstStep, SecondStep, ThirdStep} from './styles.jsx'
import GlobalContext from '../../../context/GlobalContext.jsx'

export default function FormHeader() {
  const {firstStep, secondStep, thirdStep, formValidated} = useContext(GlobalContext)

  return (
    <ProgressRange>
      <ProgressBar $isFirstStep={firstStep} $isSecondStep={secondStep} $isThirdStep={thirdStep}/>
      <FirstStep $isCurrent={firstStep} $isDone={secondStep || thirdStep} $isDisabled={!firstStep}/>
      <SecondStep $isCurrent={secondStep} $isDone={thirdStep} $isDisabled={!secondStep}/>
      <ThirdStep $isCurrent={thirdStep} $isDone={formValidated} $isDisabled={!thirdStep}/>
    </ProgressRange>
  )
}
