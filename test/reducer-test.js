import chai, {expect} from 'chai'
import {List, Map} from 'immutable'

import reducer from '../reducer.js'

describe('1 + 1', () => {
	it('', () => {
		expect(1).to.equal(1)
	})
})

describe('action with no type', () => {
	it('returns state unmodified', () => {
		//arrange
		const initialState = reducer(undefined, {})
		//act
		const newState = reducer(initialState, {})
		//assert
		expect(initialState).to.equal(newState)
	})
	it('modifies the state', () => {
		const initialState = Map({ tests: List.of(), alerts: List.of() })
		const action = {type: 'CREATE_BLOOD_TEST', id: 8, timestamp: 1455483273, value: "45"}
		const newState = reducer(initialState, action)
		expect(newState.get('tests').size).to.equal(1)

	})
})