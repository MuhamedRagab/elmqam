import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routers/Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
