import React, { memo, useRef, useState, useEffect } from 'react'
import ScrollViewWrapper from './style'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const indexRef = useRef(0)
  const totalDistanceRef = useRef(0)
  const scrollRef = useRef('')
  useEffect(() => {
    const scrollWdith = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    totalDistanceRef.current = scrollWdith - clientWidth
    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])

  function controlClick(isRight = true) {
    indexRef.current = isRight ? indexRef.current + 1 : indexRef.current - 1
    const itemNode = scrollRef.current.children[indexRef.current]
    scrollRef.current.style.transform = `translateX(${-itemNode.offsetLeft}px)`
    // 判断是否显示setShowLeft
    setShowRight(totalDistanceRef.current > itemNode.offsetLeft * indexRef.current)
    setShowLeft(indexRef.current > 0)
  }
  // offsetLeft：返回当前元素相对于其最近的定位父元素（position为relative/absolute/fixed）左边的距离
  return (
    <ScrollViewWrapper>
      {showLeft && <div className="left" onClick={() => controlClick(false)}><ArrowBackIosRoundedIcon className='icon' /></div>}
      {showRight && <div className="right" onClick={() => controlClick()}><ArrowForwardIosRoundedIcon className='icon' /></div>}
      <div className="scroll">
        <div className="scroll-content" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView
