import React, { memo } from 'react'
import { AppWrapper } from './style'
import HeaderLeft from './components/header-left'
import HeaderCenter from './components/header-center'
import HeaderRight from './components/header-right'

const AppHearder = memo(() => {
  return (
    <AppWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </AppWrapper>
  )
})

export default AppHearder