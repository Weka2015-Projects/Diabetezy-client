import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
	tests: [
		{id: '1', day: '1', time: '10:00', blood_sugar_level: '7.6'}
	],
	days: {tests.id: tests.day}
})

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'ADD_TEST_TO_DAY':
			return state.set('day',state.get('day').push(action.id))
		default:
		return state
	}
}
// const reducer = (state, action) => {
// 	let day = state.get('days')
// 	let test_id = action.test_id

// 	day[test_id] = (day[test_id]) ? 
// }