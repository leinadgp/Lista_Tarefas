import { StrictMode } from 'react'
import { createRoot, HashRouter } from 'react-dom/client'
import {GlobalStyle} from './globalStyles.js'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
      <HashRouter>
        <App />
      </HashRouter> 
   </StrictMode>,
)
