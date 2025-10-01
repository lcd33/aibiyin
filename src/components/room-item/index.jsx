import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import classnames from 'classnames'
import { RoomItemWrapper } from './style'
import Indicator from '@/base-ui/indicator'

import { Carousel } from 'antd';
import Rating from '@mui/material/Rating';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const RoomItem = memo((props) => {
  const { itemData = {}, itemWidth = '25%', itemClick } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  function handleChange(isNext = true, event) {
    event.stopPropagation()
    let newIndex
    if (isNext) {
      carouselRef.current.next()
      newIndex = selectedIndex + 1
    } else {
      carouselRef.current.prev()
      newIndex = selectedIndex - 1
    }
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex >= length) newIndex = 0
    setSelectedIndex(newIndex)
  }
  // 点击事件
  function handleClick() {
    if (itemClick) itemClick(itemData)
  }
  const carouselRef = useRef(null)
  const picturlEl = (
    <div className="cover">
      <img src={itemData.picture_url} />
    </div>)
  const picturlsEl = (
    <div className="slider" onClick={handleClick} >
      <div className="control">
        <div className='room-left item' onClick={(e) => handleChange(false, e)}><ArrowBackIosRoundedIcon sx={{ color: 'white' }} /></div>
        <div className='room-right item' onClick={(e) => handleChange(true, e)}><ArrowForwardIosRoundedIcon sx={{ color: 'white' }} /></div>
      </div>
      <div className="indicator">
        <Indicator selectedIndex={selectedIndex}>
          {
            itemData.picture_urls?.map((item, index) => (
              <div className={classnames('dot-item', { 'active': selectedIndex === index })} key={index} >
                <span className="dot"></span>
              </div>
            ))
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {itemData.picture_urls?.map((item, index) => (
          <div key={index} className="cover">
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  )
  return (
    <RoomItemWrapper style={{ width: itemWidth }}>
      <div className='inner'>
        {!itemData.picture_urls ? picturlEl : picturlsEl}
        <div className="dec" style={{ color: itemData.verify_info.text_color }}>{itemData.verify_info?.messages?.join('·')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating name="disabled" value={itemData.star_rating ?? 5} sx={{ fontSize: '12px', color: '#00848a' }} precision={0.5} />
          <div className="reviews_count">{itemData.reviews_count}</div>
          {itemData.bottom_info?.content && <div className="bottom_info" style={{ fontSize: itemData.bottom_info?.font_size + 'px', color: itemData.bottom_info?.content_color }}>·{itemData.bottom_info?.content}</div>}
        </div>
      </div >
    </RoomItemWrapper >
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  itemWidth: PropTypes.string,
}

export default RoomItem