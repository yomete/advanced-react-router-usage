import ReactDOM from 'react-dom'
import React  from 'react'
import {BrowserRouter} from 'react-router-dom'
import { App } from './Components'

ReactDOM.render(
  <BrowserRouter>
    <App />
   </BrowserRouter>
  , document.getElementById('main'))