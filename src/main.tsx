import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import App from './App'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/website">
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
