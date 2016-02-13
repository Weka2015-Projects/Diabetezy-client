import React, {Component} from 'react'
import {Link} from 'react-router'
import AlarmDigit from './alarmDigit.jsx'

class CreateAlert extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
      <Link to={`/home`}>Home</Link>
      <div><Link to={`/alert`}>Back</Link></div>

        <div className="hours">
          <AlarmDigit numberSystem={24} ref="hourDigit" />
        </div>

        <div className="minutes">
          <AlarmDigit numberSystem={60} ref="minuteDigit" />
        </div>

      </div>
      )
    }
  }

export default CreateAlert
