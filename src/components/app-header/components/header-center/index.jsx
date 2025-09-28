import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="text">
        搜索体验和房源
      </div>
      <div className="icon">
        <IconSearch />
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
