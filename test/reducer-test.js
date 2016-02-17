import chai, {expect} from 'chai'
import {List, Map} from 'immutable'
import {INITIAL_STATE} from '../reducer.js'

import reducer from '../reducer.js'

describe('1 + 1', () => {
	it('', () => {
		expect(1).to.equal(1)
	})
})


describe('CREATE_ALERT', () => {
	it('returns state unmodified', () => {
		//arrange
		const initialState = reducer(undefined, {})
		//act
		const newState = reducer(initialState, {type:'CREATE_ALERT', id: 1, time: "11:00"})
		//assert
		expect(initialState).to.not.equal(newState)
	})
	it('modifies the state', () => {
		const initialState = Map({ tests: List.of(), alerts: List.of() })
		const action = {type: 'CREATE_ALERT', id: 2, time: "10:45"}
		const newState = reducer(initialState, action)
		expect(newState.get('alerts').size).to.equal(3)

	})
})
