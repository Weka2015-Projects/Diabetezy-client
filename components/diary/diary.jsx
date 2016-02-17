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
