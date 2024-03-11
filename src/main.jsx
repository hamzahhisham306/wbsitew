import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const url = "https://assispanel.com/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App url={url}/>
  </React.StrictMode>,
)
