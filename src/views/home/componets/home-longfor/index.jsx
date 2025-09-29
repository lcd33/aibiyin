import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HomeLongForWrapper from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
const HomeLongFor = memo((props) => {
  const { data = {} } = props
  return (
    <HomeLongForWrapper>
      <SectionHeader title={data.title} subTitle={data.subtitle} />
      <div className="longfor-content">
        <ScrollView>
          {data.list.map((item, index) => (
            <div key={index} className="longfor-item">
              <div className="cover">
                <img src={item.picture_url} />
                <div className="onImg"></div>
                <div className="info">
                  <div className="city">{item.city}</div>
                  <div className="price">均价{item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

HomeLongFor.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomeLongFor
