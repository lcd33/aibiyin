import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchGoodPriceInfo } from '@/store/modules/home'
import HomeBanner from './componets/homeBanner'
import SectionHeader from '@/components/section-header'
import RoomList from '@/components/room-list'
import { HomeWrapper } from './style'
const index = memo(() => {
  // 1. 从store中获取数据
  const { goodPriceInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    // 发送请求获取数据
    dispatch(fetchGoodPriceInfo())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <SectionHeader title={goodPriceInfo.title} />
        <RoomList roomList={goodPriceInfo.list} />
      </div>
    </HomeWrapper>
  )
})

export default index