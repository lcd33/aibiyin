import React, { memo } from 'react'
import AppFooterWrapper from './style'

import footerData from '@/assets/data/footer'
const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="layout">
        <div className='content'>
          {
            footerData.map((item, index) => {
              return (
                <div className="item" key={item.name}>
                  <div className="title">{item.name}</div>
                  <div className="title-contener">
                    {
                      item.list.map((item, index) => {
                        return (
                          <a className="item" key={item}>{item}</a>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="copyright">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
        </div>
      </div>

    </AppFooterWrapper>
  )
})

export default AppFooter