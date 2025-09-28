import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconSetting from '@/assets/svg/icon_setting'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(false)

  // 点击其他地方隐藏true 转换成为事件捕获
  useEffect(() => {
    function handleClick() {
      setIsShow(false)
    }

    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  // 切换显示
  const changeShow = (e) => {
    e.stopPropagation()
    setIsShow(!isShow)
  }
  return (
    <RightWrapper >
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={changeShow}>
        <IconSetting />
        <IconAvatar />
        {isShow && (<div className='pannel'>
          <div className="top">
            <div className='item'>注册</div>
            <div className='item'>登录</div>
          </div>
          <div className="bottom">
            <div className='item'>出租房源</div>
            <div className='item'>开屏体验</div>
            <div className='item'>帮助</div>
          </div>
        </div>)}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
