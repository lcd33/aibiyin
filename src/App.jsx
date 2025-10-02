import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import routes from './router'

import AppHearder from './components/app-header'
import AppFooter from './components/app-footer'


const App = memo(() => {
  const { config } = useSelector(state => state.main, shallowEqual)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(location.pathname)
  }, [location.pathname, dispatch])
  return (
    <div>
      <AppHearder config={config} />
      <div className="content">
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App