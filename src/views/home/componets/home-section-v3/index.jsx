import React, { memo } from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import HomeSectionV3Wrapper from './style'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { data } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      <div className='v3-content'>
        <ScrollView>
          {
            data.list.map((item, index) => (
              <RoomItem key={item.id} itemData={item} itemWidth='20%' />
            ))
          }
        </ScrollView>
      </div>
      <SectionFooter name='PLUS' />
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomeSectionV3
