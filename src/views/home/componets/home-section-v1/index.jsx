import React, { memo } from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/section-header'
import RoomList from '@/components/room-list'
import HomeSectionV1Wrapper from './style'
import SectionFooter from '@/components/section-footer'
const HomeSectionV1 = memo((props) => {
  const { data = {} } = props
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      <RoomList roomList={data.list} />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  )
})
HomeSectionV1.propTypes = {
  info: PropTypes.object.isRequired,
}
export default HomeSectionV1
