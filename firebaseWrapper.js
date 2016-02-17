import request from 'superagent'
import Firebase from 'firebase'
import {fromJS} from 'immutable'

var ref = new Firebase("https://diabetezy-server.firebaseio.com");

let auth
let onAuthCallback

export const onFirebaseAuth = (callback) => {
  onAuthCallback = callback
  ref.onAuth(authDataCallback);
}

export const getDataFromFirebase = (callback) => {
  let url = `${ref}users/${auth.uid}.json?auth=${auth.token}`
  request.get(url).end((err, res) => {
    let data = JSON.parse(res.text)
    let newState = fromJS({
      tests: data.tests || [],
      alerts: data.alerts || []
    })
    callback(newState)
  })
}

export const saveBloodTest = (action, callback) => {
  let url = `${ref}users/${auth.uid}/tests.json?auth=${auth.token}`
  let id
  request
    .post(url)
    .send({timestamp: action.timestamp, value: action.value})
    .end((err, res) => {
      callback(res.body.name)
    })
}

export const saveAlert = (action, callback) => {
  let url = `${ref}users/${auth.uid}/alerts.json?auth=${auth.token}`
  let id
  request
    .post(url)
    .send({time: action.time})
    .end((err, res) => {
      callback(res.body.name)
    })
}

export const deleteAlert = (action, callback) => {
  let url = `${ref}users/${auth.uid}/alerts/${action.id}.json?auth=${auth.token}`
  let id
  request
    .del(url)
    .end((err, res) => {
      callback(action.id)
    })
}

function authDataCallback(authData) {
  if (authData) {
    auth = authData
    onAuthCallback(authData)
  } else {
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        auth = authData
        onAuthCallback(authData)
        console.log("Authenticated successfully with payload:", authData);
      }
    })
  }
}
