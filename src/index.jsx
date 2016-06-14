import React from 'react'
import { render } from 'react-dom'
import reducer from './reducer.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {getDataFromFirebase, onFirebaseAuth} from './firebaseWrapper'
import {Button} from 'react-bootstrap'

import './assets/styles/index.css'

import App from './components/app.jsx'

const store = createStore(reducer)
onFirebaseAuth(() => {
  getDataFromFirebase((newState) => {
    store.dispatch({type: 'OVERWRITE_STATE', state: newState})
  })
})

const div = document.createElement('div')
document.body.appendChild(div)
div.id = ('bootstrap-override')
document.body.appendChild(div)
div.id = ('app')
div.class = ('index')

render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('app'))
