import React, { memo, useRef, useEffect } from 'react'
import IndicatorWrapper from './style'

const Indicator = memo((props) => {
  const { selectedIndex } = props

  // console.log(selectedIndex)
  const contentRef = useRef(null)
  useEffect(() => {
    const itemEl = contentRef.current.children[selectedIndex]
    const itemWidth = itemEl.offsetLeft
    const itemClientWidth = itemEl.clientWidth
    const parentclientWidth = contentRef.current.clientWidth
    const parentScrollWidth = contentRef.current.scrollWidth
    let totalDistance = itemWidth + itemClientWidth / 2 - parentclientWidth / 2

    if (totalDistance < 0) totalDistance = 0
    const maxDistance = parentScrollWidth - parentclientWidth
    if (totalDistance > maxDistance) totalDistance = maxDistance
    contentRef.current.style.transform = `translate(${-totalDistance}px)`
    // console.log(itemWidth, itemClientWidth, parentclientWidth, totalDistance)
  }, [selectedIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator
