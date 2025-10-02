import React, { memo, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import { CloseOutlined, CaretUpFilled, CaretDownFilled } from '@ant-design/icons'
import { Carousel } from 'antd';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import Indicator from '@/base-ui/indicator'
import DetailSwipperWrapper from './style'
import useNotScroll from '@/hooks/useNotScroll'

const DetailSwipper = memo((props) => {
  const { picture_urls, handleShowCheckAll, name } = props
  const [showList, setShowList] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const footerRef = useRef(null)
  const carouselRef = useRef(null)
  // 点击隐藏图片列表
  function handleHideList() {
    const newShowList = !showList
    footerRef.current.style.transform = `translateY(${newShowList ? 0 : 80}px)`
    setShowList(newShowList)
  }
  // 切换图片
  function handleChange(isNext, e) {
    e.stopPropagation()
    let newIndex
    // 处理索引超出范围的情况
    if (isNext) {
      newIndex = selectedIndex + 1 > picture_urls.length - 1 ? 0 : selectedIndex + 1
      carouselRef.current.next()
    } else {
      newIndex = (selectedIndex - 1 + picture_urls.length) % picture_urls.length
      carouselRef.current.prev()
    }
    console.log(newIndex, picture_urls.length)
    setSelectedIndex(newIndex)
  }
  // 点击图片切换
  function clickImg(index) {
    setSelectedIndex(index)
    carouselRef.current.goTo(index)
  }

  useNotScroll()
  return (
    <DetailSwipperWrapper>
      <div className="swipper-header">
        <div onClick={handleShowCheckAll}><CloseOutlined style={{ color: '#fff', fontSize: 24 }} /></div>
      </div>
      {/* 图片列表 */}
      <div className="swipper-content">
        <div className='control1'>
          <div className='pic-left item' onClick={(e) => handleChange(false, e)}><ArrowBackIosRoundedIcon sx={{ color: 'white', fontSize: 48 }} /></div>
          <div className='pic-right item' onClick={(e) => handleChange(true, e)}><ArrowForwardIosRoundedIcon sx={{ color: 'white', fontSize: 48 }} /></div>
        </div>
        <Carousel dots={false} ref={carouselRef} >
          {
            picture_urls.map((item, index) => (
              <div key={index} className='datail-images'>
                <img src={item} />
              </div>
            ))
          }
        </Carousel>
      </div>
      {/* 底部 */}
      <div className="swipper-footer" >
        <div className='swipper-footer-content' ref={footerRef}>
          <div className="swipper-footer-info">
            <div className="swipper-footer-info-title">
              {selectedIndex + 1}/{picture_urls.length}：{name}
            </div>
            <div className='swipper-footer-info-hide' onClick={handleHideList}>隐藏图片列表{!showList ? <CaretUpFilled /> : <CaretDownFilled />}</div>
          </div>
          <div className='swipper-footer-indicator'>

            {
              <Indicator selectedIndex={selectedIndex} >
                {
                  picture_urls.map((item, index) => (
                    <div key={index} className={classNames('datail-images', { 'datail-images-active': selectedIndex === index })} onClick={() => clickImg(index)}>
                      <div className="swipper-footer-cover"></div>
                      <img src={item} />
                    </div>
                  ))
                }
              </Indicator>
            }
          </div>
        </div>

      </div>
    </DetailSwipperWrapper>
  )
})
DetailSwipper.propTypes = {
  picture_urls: PropTypes.array.isRequired,
  handleShowCheckAll: PropTypes.func.isRequired,
}
export default DetailSwipper
