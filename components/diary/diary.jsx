import React, {Component} from 'react'
import {Link} from 'react-router'
import Calendar from './calendar.jsx'

class Diary extends Component {

  render() {

    return <div>
        <div className="navigation">
          <Link to={`/home`}>Home</Link>
        </div>
      <Calendar />
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

