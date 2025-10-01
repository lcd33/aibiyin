import React, { memo } from 'react'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import Logo from '@/assets/svg/Logo'
const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={handleClick}>
        <Logo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
