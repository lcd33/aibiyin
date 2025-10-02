import React, { memo, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import classNames from 'classnames'
import IconSearch from '@/assets/svg/icon_search'
import HeaderSearch from '../header-search'
import { CenterWrapper } from './style'

const HeaderCenter = memo((props) => {
  const { seartchData, centerClick, isSearch } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const names = seartchData.map(item => item.title)
  const searchInfos = seartchData[selectedIndex].searchInfos

  const centerContentRef = useRef(null)
  const searchContentRef = useRef(null)
  // 点击切换搜索类型
  const clickItem = (index) => {
    setSelectedIndex(index)
  }

  const notSearchEl = (
    <div className="center-content" onClick={() => centerClick()} ref={centerContentRef}>
      <div className="text">
        搜索体验和房源
      </div>
      <div className="icon">
        <IconSearch />
      </div>
    </div>
  )

  const searchEl = (
    <div className='search-content-wrapper' ref={searchContentRef}>
      <div className='search-content'>
        {
          names.map((item, index) => (
            <div
              key={index}
              className={classNames('search-item', {
                'search-item-active': index === selectedIndex
              })}
              onClick={() => clickItem(index)}
            >
              {item}
            </div>
          ))
        }
      </div>
      <div className="seatch-bar">
        <HeaderSearch searchInfos={searchInfos} selectedIndex={selectedIndex} />
      </div>
    </div>
  )
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        timeout={300}
        classNames="centerContent"
        unmountOnExit={true}
        nodeRef={centerContentRef}
      >
        {
          notSearchEl
        }
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        timeout={300}
        classNames="searchContent"
        unmountOnExit={true}
        nodeRef={searchContentRef}
      >
        {
          searchEl
        }
      </CSSTransition>
    </CenterWrapper>
  )
})
HeaderCenter.propTypes = {
  seartchData: PropTypes.array.isRequired,
}
export default HeaderCenter
