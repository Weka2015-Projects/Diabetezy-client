import {fromJS, Map} from 'immutable'

const INITIAL_STATE = Map({ tests: [], alerts: [] })

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case 'CREATE_ALERT':
      const addAlert = Map({id: action.id, time: action.time})
      return state.set('alerts', state.get('alerts').set(action.id, addAlert))

    case 'OVERWRITE_STATE':
      return action.state      

    case 'CREATE_BLOOD_TEST':
      const addBloodTest = Map({id:action.id, timestamp: action.timestamp, value: action.value})
      return state.set('tests', state.get('tests').set(action.id, addBloodTest))

    default:
      return state
  }
}

export default reducer
