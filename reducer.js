import {fromJS, Map} from 'immutable'
import Firebase from 'firebase'

import data from './test-data.json'

const INITIAL_STATE = fromJS(data.users[0])

function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}
var ref = new Firebase("https://diabetezy-server.firebaseio.com");

ref.onAuth(authDataCallback);

function doFirebaseLogin() {
  
  ref.authWithOAuthPopup("github", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
}

import $ from 'jquery'

$('a').click(function(e) {
 e.preventDefault() 
 doFirebaseLogin() 
})

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'CREATE_ALERT':
    var alertMap = Map({id: 2, time: action.time})
      return state.set('alerts', state.get('alerts').push(alertMap))
  default:
      return state
  }
} 
export default reducer

// const newState = reducer(undefined, {type: "CREATE_ALERT", time: "12:30"})

// console.log("hu", newState.get('alerts').last().get('time'))