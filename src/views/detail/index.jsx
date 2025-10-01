import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const Detail = memo(() => {
  const { roomDetail } = useSelector(state => state.detail)
  return (
    <div>{roomDetail.name}</div>
  )
})

export default Detail