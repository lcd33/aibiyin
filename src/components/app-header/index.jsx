import React, { memo, useState, useRef } from 'react'
import { AppWrapper } from './style'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import seartchData from '@/assets/data/search_titles.json'
import HeaderLeft from './components/header-left'
import HeaderCenter from './components/header-center'
import HeaderRight from './components/header-right'

import useScrollPostion from '@/hooks/useScrollPostion'
import { changeConfig } from '@/store/modules/main'

const AppHearder = memo((props) => {

  const [isSearch, setIsSearch] = useState(false)
  const { isFixed, topAlfp } = props.config


  // 顶部的监听事件
  const dispatch = useDispatch()
  const preY = useRef(0)
  const scrollY = useScrollPostion()
  if (!isSearch) preY.current = scrollY
  if (isSearch && Math.abs(scrollY - preY.current) > 50) setIsSearch(false)


  function handleSearch() {
    setIsSearch(true)
  }
  const isAlpha = topAlfp && scrollY === 0
  // ThemeProvider 主题提供器，将 topAlfp 传递给子组件,可以多次调用想上合并，相同的就替换
  return (
    <ThemeProvider theme={{ topAlfp: isAlpha }}>
      <AppWrapper isFixed={isFixed}>
        <div className='ahd-content-wrapper'>
          <div className="ahd-content" >
            <HeaderLeft />
            <HeaderCenter seartchData={seartchData} centerClick={handleSearch} isSearch={isAlpha || isSearch} />
            <HeaderRight />
          </div>
        </div>
        {isSearch && <div className='cover' onClick={() => setIsSearch(false)}></div>}
      </AppWrapper>
    </ThemeProvider>
  )
})

export default AppHearder