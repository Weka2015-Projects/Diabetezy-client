import request from 'superagent'
import Firebase from 'firebase'
import {Map} from 'immutable'

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
    let newState = Map({
      tests: data.tests || [],
      alerts: data.alerts || []
    })
    callback(newState)
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
