import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './App.jsx'
import "normalize.css"
import '@/assets/css/reset.scss'
import '@/assets/css/common.scss'
import theme from '@/assets/theme'

import store from './store'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback={<div>loading...</div>}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </Provider>

  </HashRouter>
  // </StrictMode>,
)
