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
      <AlarmDigit numberSystem={24} ref="hourDigit" />
      <AlarmDigit numberSystem={60} ref="minDigit" />      
      </div>
      )
    }
  }

export default CreateAlert
