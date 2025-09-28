import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './views/home'
import routes from './router'
const App = memo(() => {
  return (
    <div>
      <div className="header"></div>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <div className="footer"></div>
    </div>
  )
})

export default App