import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.jsx'

import "normalize.css"
import '@/assets/css/app.scss'
import '@/assets/css/reset.scss'

import store from './store'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HashRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </HashRouter>
  // </StrictMode>,
)
