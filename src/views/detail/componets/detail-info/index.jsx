import React, { memo } from 'react'
import PropTypes from 'prop-types'
import DetailInfoWrapper from './sytle.js'
const DetailInfo = memo((props) => {
  const { picture_urls, handleShowCheckAll } = props
  return (
    <DetailInfoWrapper>
      {
        picture_urls.slice(0, 5).map((item, index) => (
          <div key={index} className='detail-info-item'>
            <img src={item} />
            <div className='detail-info-item-cover'>
            </div>
          </div>
        ))
      }
      <div className='check-all' onClick={handleShowCheckAll}>
        查看照片
      </div>
    </DetailInfoWrapper>
  )
})
DetailInfo.propTypes = {
  picture_urls: PropTypes.array.isRequired,
  showCheckAll: PropTypes.func.isRequired
}
export default DetailInfo
