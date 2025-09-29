import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import HomeSectionV2Wrapper from './style'
import SectionHeader from '@/components/section-header'
import RoomList from '@/components/room-list'
import SectionFooter from '@/components/section-footer'
import SectionTabs from '@/components/section-tabs'
const HomeSectionV2 = memo((props) => {
  const { data = {} } = props
  const name = data.dest_address[0].name
  const [activeCity, setActiveCity] = useState(name)
  const tabNames = data.dest_address.map(item => item.name)
  const handleTabClick = useCallback((index, name) => {
    setActiveCity(name)
  }, [])
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={data?.title} subTitle={data.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={handleTabClick} />
      <RoomList roomList={data.dest_list[activeCity] || []} itemWidth='33.33%' />
      <SectionFooter name={activeCity} />
    </HomeSectionV2Wrapper>
  )
})
HomeSectionV2.propTypes = {
  data: PropTypes.object,
}
export default HomeSectionV2
