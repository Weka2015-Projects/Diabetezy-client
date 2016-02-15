import {fromJS, Map} from 'immutable'
import data from './test-data.json'

const INITIAL_STATE = fromJS(data.users[0])

// console.log(INITIAL_STATE.get('alerts').first().get('time'))

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