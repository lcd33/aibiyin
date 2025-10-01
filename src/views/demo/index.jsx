import React, { memo, useState } from 'react'
import DemoWrapper from './style'
import Indicator from '@/base-ui/indicator'
const Demo = memo(() => {
  const nams = ['1313', 'dbda', 'fnda', 'dajda', 'fjhha', 'dajk']
  const [selectedIndex, setSelectedIndex] = useState(0)

  function handleClick(isNext = true) {
    function handleChangeIndex(pre) {
      const newIndex = isNext ? (pre + 1) % nams.length : (pre - 1 + nams.length) % nams.length
      return newIndex
    }
    // setSelectedIndex是一个异步函数，需要在回调函数中获取最新的selectedIndex
    setSelectedIndex(handleChangeIndex)
  }
  return (
    <DemoWrapper>
      <div>
        <button onClick={() => handleClick(false)}>上一个</button>
        <button onClick={() => handleClick(true)}>下一个</button>
      </div>

      <div style={{ width: '100px' }}>
        <Indicator selectedIndex={selectedIndex}>
          {
            nams.map((item, index) => (
              <button key={index}>{item}</button>
            ))
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
