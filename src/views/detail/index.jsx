import React, { memo, useState, useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import DetailWrapper from './style'
import DetailInfo from './componets/detail-info'
import DetailSwipper from './componets/detial-swipper'

import { changeConfig } from '@/store/modules/main'

const Detail = memo(() => {


  const [showCheckAll, setShowCheckAll] = useState(false)
  const { roomDetail } = useSelector(state => state.detail, shallowEqual)
  const { picture_urls, name } = roomDetail
  // 查看全部照片点击事件
  function handleShowCheckAll() {
    setShowCheckAll(!showCheckAll)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeConfig({ isFixed: true, topAlfp: false }))
    console.log(11)
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailInfo picture_urls={picture_urls} handleShowCheckAll={handleShowCheckAll} />
      {showCheckAll && <DetailSwipper picture_urls={picture_urls} name={name} handleShowCheckAll={handleShowCheckAll} />}
    </DetailWrapper>
  )
})


export default Detail