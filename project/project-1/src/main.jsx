import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mall from './ContextAPIIntro/Mall.jsx'
import mall from './ContextAPIIntro/Mall.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Mall>
    <App />
  </Mall>,
)
