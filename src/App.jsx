import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'

import AppHearder from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <AppHearder />
      <div className="content">
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App