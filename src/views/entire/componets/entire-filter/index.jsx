import React, { memo, useState } from 'react'
import classNames from 'classnames'

import EntireFilterWrapper from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo(() => {

  const [filterList, setFilterList] = useState([])
  function pushIntoInner(item) {
    if (filterList.includes(item)) {
      setFilterList(filterList.filter(i => i !== item))
      return
    }
    setFilterList([...filterList, item])
  }

  
  return (
    <EntireFilterWrapper>
      <div className="filter-container">
        {
          filterData.map((item, index) => (
            <div
              key={item}
              className={classNames('filter-item', { 'filter-active': filterList.includes(item) })}
              onClick={() => pushIntoInner(item)}
            >
              <div className="filter-item-title">{item}</div>
            </div>
          ))
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter
