import React from 'react'
import { PageWrapper } from '../../elements/page-wrapper/PageWrapper.jsx'
import MainHeader from '../../blocks/start-header/MainHeader.jsx'
import Main from '../../blocks/start-main/Main.jsx'

export default function StartPage({startPageShown}) {
  return startPageShown && (
    <PageWrapper>
      <MainHeader />
      <Main />
    </PageWrapper>
  )
}
