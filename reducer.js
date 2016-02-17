import {fromJS, Map, List} from 'immutable'

const INITIAL_STATE = Map({ tests: List.of(), alerts: List.of() })

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CREATE_ALERT':
      var alertMap = Map({id: 2, time: action.time})
        return state.set('alerts', state.get('alerts').push(alertMap))

    case 'OVERWRITE_STATE':
    console.log(action.state.toJS)
      return fromJS(action.state)

    case 'CREATE_BLOOD_TEST':
      var addBloodTest = Map({id:action.id, timestamp: action.timestamp, value: action.value})
      return state.set('tests', state.get('tests').set(action.id, addBloodTest))


    case 'DELETE_BLOOD_TEST':
      const deleteblood = state.deleteIn(['tests', action.id])
      return deleteblood

    default:
      return state
  }
} 
export default reducer