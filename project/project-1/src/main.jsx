import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mall from './ContextAPIIntro/Mall.jsx'
import mall from './ContextAPIIntro/Mall.jsx'
import Vmart from './ContextAPIIntro/Vmart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Vmart>
    <App />
  </Vmart>,
)
