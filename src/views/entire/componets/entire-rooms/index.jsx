import React, { memo } from 'react'

import EntireRoomsWrapper from './style'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RoomItem from '@/components/room-item'
import { changeRoomDetail } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  const { roomList, totalCount } = useSelector(state => state.entire)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // 点击事件
  function itemClick(item) {
    console.log(item)
    dispatch(changeRoomDetail(item))
    navigate(`/detail`)
  }
  return (
    <EntireRoomsWrapper>
      <div className='entire-totalroom'>
        {totalCount}多处房间
      </div>
      <div className='entire-roosm'>
        {
          roomList.map(item => (
            <RoomItem key={item.id} itemData={item} itemWidth="20%" itemClick={itemClick} />
          ))
        }
      </div>
    </EntireRoomsWrapper>
  )
})

export default EntireRooms
