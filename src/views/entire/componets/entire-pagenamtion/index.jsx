import React, { memo, useState } from 'react'
import EntirePagenamtionWrapper from './style'
import Pagination from '@mui/material/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { ChangePageAction } from '@/store/modules/entire/createActions'

const EntirePagenamtion = memo(() => {
  const { currentPage, totalCount } = useSelector(state => state.entire)
  const [pageCount, setPageCount] = useState(1)
  const dispatch = useDispatch()

  // 分页器点击事件
  function handleChange(event, page) {
    dispatch(ChangePageAction(page - 1))
    setPageCount((page - 1) * 20 + 1)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <EntirePagenamtionWrapper>
      <div className='entire-pagenamtion'>
        <Pagination count={Math.ceil(totalCount / 20)} color='primary' onChange={handleChange} />
      </div>
      <div className="text">第 {pageCount} - {pageCount + 19} 个房源, 共超过 {totalCount} 个</div>
    </EntirePagenamtionWrapper>
  )
})

export default EntirePagenamtion
