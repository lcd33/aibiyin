import React, { memo } from 'react'
import PropTypes from 'prop-types'
import SectionHeaderWrapper from './style'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const SectionHeader = memo((props) => {
  const { title, subTitle } = props
  return (
    <SectionHeaderWrapper>
      <div className="left">
        <h2 className="title">{title}</h2>
        {subTitle && <div className="subtitle">{subTitle}</div>}
      </div>
      <div className="right">
        <ArrowForwardIosRoundedIcon sx={{ fontSize: '16px' }} />
      </div>
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}
export default SectionHeader
