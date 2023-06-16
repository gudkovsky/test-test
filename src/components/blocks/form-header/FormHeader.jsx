import React from 'react'
import {ProgressRange, ProgressBar, FirstStep, SecondStep, ThirdStep} from './styles.jsx'

export default function FormHeader() {
  return (
    <ProgressRange>
      <ProgressBar></ProgressBar>
      <FirstStep isCurrent={true} isDone={false}/>
      <SecondStep isCurrent={false} isDone={false}/>
      <ThirdStep isCurrent={false} isDone={false}/>
    </ProgressRange>
  )
}
