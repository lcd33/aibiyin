import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SectionFooterWrapper from './style'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = '显示全部'
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  const navigate = useNavigate()
  function handleClick() {
    navigate('/entire')
  }
  return (
    <SectionFooterWrapper color={name ? '#00848a' : '#000'}>
      <div onClick={handleClick} className='footer-info'>
        <div className='text'>{showMessage}</div>
        <ArrowForwardIosRoundedIcon className='icon' />
      </div>
    </SectionFooterWrapper>
  )
})
SectionFooter.propTypes = {
  name: PropTypes.string,
}
export default SectionFooter
