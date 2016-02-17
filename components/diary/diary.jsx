import React, {Component} from 'react'
import {Link} from 'react-router'
import Calendar from './calendar.jsx'

class Diary extends Component {

  render() {

    return <div className="main">
      <div>
        <Link to={`/home`}>Home</Link>
      </div>
      <div id="calendar">
      <Calendar />
      </div>
      <div id="test-object"></div>
    </div>
  }
}

export default Diary
//pseudocode
// function testIsPresent() {
//   if (day div contains a test object) {
//     write these details to "test-object" on click
//   } else {
//     display "There are no entries for this date" +
//     "add new entry"
//   }
// }

