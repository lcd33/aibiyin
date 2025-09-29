import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWrapper } from './style'
import Rating from '@mui/material/Rating';
const RoomItem = memo((props) => {
  const { itemData = {}, itemWidth = '25%' } = props
  return (
    <RoomItemWrapper style={{ width: itemWidth }}>
      <div className='inner'>
        <div className="cover">
          <img src={itemData.picture_url} />
        </div>
        <div className="dec" style={{ color: itemData.verify_info.text_color }}>{itemData.verify_info?.messages?.join('·')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating name="disabled" value={itemData.star_rating ?? 5} sx={{ fontSize: '12px', color: '#00848a' }} precision={0.5} />
          <div className="reviews_count">{itemData.reviews_count}</div>
          {itemData.bottom_info?.content && <div className="bottom_info" style={{ fontSize: itemData.bottom_info?.font_size + 'px', color: itemData.bottom_info?.content_color }}>·{itemData.bottom_info?.content}</div>}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  itemWidth: PropTypes.string,
}

export default RoomItem