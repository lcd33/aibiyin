import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchGoodPriceInfo, fetchHighScoreData, fetchDiscountInfo, fetchHotRecommendInfo, fetchLongForInfo, fetchHomePlusInfo } from '@/store/modules/home'
import HomeBanner from './componets/homeBanner'
import HomeSectionV1 from './componets/home-section-v1'
import HomeSectionV2 from './componets/home-section-v2'
import HomeSectionV3 from './componets/home-section-v3'
import HomeLongFor from './componets/home-longfor'
import { HomeWrapper } from './style'
import isEmpty from '@/utils/isEmpty'
import { changeConfig } from '@/store/modules/main'

const index = memo((props) => {
  // 1. 从store中获取数据
  const { goodPriceInfo = {}, highScoreInfo = {}, discountInfo = {}, hotRecommendInfo = {}, longForInfo = {}, homePlusInfo = {} } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longForInfo: state.home.longForInfo,
    homePlusInfo: state.home.homePlusInfo,
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeConfig({ isFixed: true, topAlfp: true }))
    // 发送请求获取数据
    dispatch(fetchGoodPriceInfo())
    // 发送请求获取高分数数据
    dispatch(fetchHighScoreData())
    // 发送请求获取折扣数据
    dispatch(fetchDiscountInfo())
    // 发送请求获取热门推荐数据
    dispatch(fetchHotRecommendInfo())
    // 发送请求获取长租数据
    dispatch(fetchLongForInfo())
    // 发送请求获取homePlus数据
    dispatch(fetchHomePlusInfo())
  }, [dispatch])


  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!isEmpty(discountInfo) && <HomeSectionV2 data={discountInfo} />}
        {!isEmpty(hotRecommendInfo) && <HomeSectionV2 data={hotRecommendInfo} />}
        {!isEmpty(longForInfo) && <HomeLongFor data={longForInfo} />}
        {!isEmpty(goodPriceInfo) && <HomeSectionV1 data={goodPriceInfo} />}
        {!isEmpty(highScoreInfo) && <HomeSectionV1 data={highScoreInfo} />}
        {!isEmpty(homePlusInfo) && <HomeSectionV3 data={homePlusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default index