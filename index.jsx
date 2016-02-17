import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {getDataFromFirebase, onFirebaseAuth} from './firebaseWrapper'
import {Button} from 'react-bootstrap'

import App from './components/app.jsx'

const store = createStore(reducer)
onFirebaseAuth(() => {
  getDataFromFirebase((newState) => {
    store.dispatch({type: 'OVERWRITE_STATE', state: newState})
  })
})

const app = document.createElement('div')

document.body.appendChild(app)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('app'))
