import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import {GlobalStyle} from './globalStyles.js'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <HashRouter>
        <GlobalStyle/>
        <App />
      </HashRouter> 
   </StrictMode>
)
