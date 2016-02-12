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
    </div>
  }
}

export default Diary