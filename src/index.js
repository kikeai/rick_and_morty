import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const browser = <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(
  browser,
  document.getElementById('root')
)
