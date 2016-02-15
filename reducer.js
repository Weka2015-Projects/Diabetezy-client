import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({

})

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DO_THIS':
      return state.set('foo', state.get('foo').push(action.id))
    default:
      return state
  }
}
