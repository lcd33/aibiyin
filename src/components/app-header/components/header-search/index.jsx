import React, { memo } from 'react'
import SearchBar from './style'

const HeaderSearch = memo((props) => {
  const { searchInfos, selectedIndex } = props
  return (
    <SearchBar>
      <div className="search-content">
        {
          searchInfos.map((item, index) => (
            <div className="search-item1" key={item.title}>
              <div className="text">{item.title}</div>
              <div className="sub-text">{item.desc}</div>
            </div>
          ))
        }
      </div>
    </SearchBar>
  )
})

export default HeaderSearch
