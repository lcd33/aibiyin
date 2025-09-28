import React, { memo } from 'react'
import { LeftWrapper } from './style'
import Logo from '@/assets/svg/Logo'
const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <Logo />
    </LeftWrapper>
  )
})

export default HeaderLeft
