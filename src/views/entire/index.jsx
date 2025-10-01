import React, { memo, useEffect } from 'react'
import EntireWrapper from './style'
import EntireFilter from './componets/entire-filter'
import EntireRooms from './componets/entire-rooms'
import EntirePagenamtion from './componets/entire-pagenamtion'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoomListDataAction } from '@/store/modules/entire/createActions'
const Entire = memo(() => {
  const { currentPage } = useSelector(state => state.entire)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListDataAction())
  }, [currentPage, dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagenamtion />
    </EntireWrapper>
  )
})

export default Entire