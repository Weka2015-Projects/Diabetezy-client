import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Button} from 'react-bootstrap'
import App from './components/app.jsx'

const store = createStore(reducer)

const app = document.createElement('div')

document.body.appendChild(app)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
app)