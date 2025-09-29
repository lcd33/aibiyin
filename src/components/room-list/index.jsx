import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '../room-item'
import RoomListWrapper from './style'
const RoomList = memo((props) => {
  const { roomList = [], itemWidth } = props
  return (
    <RoomListWrapper>
      {
        roomList.slice(0, 8).map(item => (
          <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
        ))
      }
    </RoomListWrapper>
  )
})

RoomList.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
}

export default RoomList
