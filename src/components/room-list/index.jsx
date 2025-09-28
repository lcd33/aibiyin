import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '../room-item'
import RoomListWrapper from './style'
const RoomList = memo((props) => {
  const { roomList = [] } = props
  return (
    <RoomListWrapper>
      {
        roomList.slice(0, 8).map(item => (
          <RoomItem key={item.id} itemData={item} />
        ))
      }
    </RoomListWrapper>
  )
})

RoomList.propTypes = {
  roomList: PropTypes.array,
}

export default RoomList
