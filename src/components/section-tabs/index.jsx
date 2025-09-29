import React, { memo, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import SectionTabsWrapper from './style'
import ScrollView from '@/base-ui/scroll-view'
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const changeTab = (index, name) => {
    setActiveIndex(index)
    tabClick?.(index, name)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => (
            <div
              key={index}
              className={classNames('item', { active: activeIndex === index })}
              onClick={() => changeTab(index, item)}
            >{item}
            </div>
          ))
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})
SectionTabs.propTypes = {
  tabNames: PropTypes.array.isRequired,
  tabClick: PropTypes.func,
}
export default SectionTabs
