import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { expect } from 'chai'
import { beforeEach, describe, it } from 'mocha'

import Calendar from '../components/diary/calendar.jsx'

const {
  isCompositeComponent,
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = TestUtils


describe('Calendar', () => {
  let calendar

  beforeEach(() => {
    calendar = renderIntoDocument(<Calendar/>)
  })

  it('Display index number +1 to match date value', () => {
  const circle = scryRenderedDOMComponentsWithTag(app, 'circle')[0]


  expect(circles.length).to.equal(5)
})

  it('Expect date to change at clicked index', () => {
  const circle = scryRenderedDOMComponentsWithTag(app, 'circle')[0]


  expect(circles.length).to.equal(5)
})

  it('Expect time value to change at clicked index', () => {
  const circle = scryRenderedDOMComponentsWithTag(app, 'circle')[0]


  expect(circles.length).to.equal(5)
})

  it('Expect b_s_l to change at clicked index', () => {
  const circle = scryRenderedDOMComponentsWithTag(app, 'circle')[0]


  expect(circles.length).to.equal(5)
})

  it('Expect object at clicked index to have changed, and all others to remain the same', () => {
  const circle = scryRenderedDOMComponentsWithTag(app, 'circle')[0]


  expect(circles.length).to.equal(5)
})



  // TESTS:
  // console.log(idx + 1, this.state.month)
  // console.log("Display index number +1 to match date value",
  // idx + 1, this.state.month[idx][0], this.state.month[idx].date)
  console.log("Expect date to change at clicked index",
  // idx + 1, this.state.month[idx].date = "9")
  // console.log("Expect time value to change at clicked index",
  // idx + 1, this.state.month[idx].time = "18:00")
  // console.log("Expect b_s_l to change at clicked index",
  // idx + 1, this.state.month[idx].blood_sugar_level = "9.0")
  // console.log("Expect object at clicked index to have changed, and all others
    // to remain the same", idx + 1, this.state.month)




})
