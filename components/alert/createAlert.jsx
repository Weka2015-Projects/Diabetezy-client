import React, {Component} from 'react'
import {Link} from 'react-router'
import AlarmDigit from './alarmDigit.jsx'
import moment from 'moment'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

class CreateAlert extends Component {
  constructor(props){
    super(props)

    this.state = {
      hourCounter: 0,
      minuteCounter: 0,
      alertTime: this.props.params.time,
      id: this.props.params.id
    }

    // if alert already exists do this:
    if (this.state.alertTime || this.state.id != undefined) {
      let alertTime = this.state.alertTime
      console.log('alertTime', alertTime)
      let splitAlertHour = (this.state.hourCounter = parseInt(alertTime.substring(0,2)))
      let splitAlertMinute = (this.state.minuteCounter = parseInt(alertTime.substring(3,5)))
    }
}

  handleHrIncrease = () => {
    this.state.hourCounter ++
    if (this.state.hourCounter >= 24) {
      this.state.hourCounter = 0
    }
    this.setState(this.state)
  };

  handleHrDecrease = () => {
    this.state.hourCounter --
    if (this.state.hourCounter < 0) {
      this.state.hourCounter = 23
    }
    this.setState(this.state)
  };

  handleMinIncrease = () => {
    this.state.minuteCounter ++
    if (this.state.minuteCounter >= 60) {
      this.state.minuteCounter = 0
    }
    this.setState(this.state)
  };

  handleMinDecrease = () => {
    this.state.minuteCounter --
    if (this.state.minuteCounter < 0) {
      this.state.minuteCounter = 59
    }
    this.setState(this.state)
  };

  saveButton = () => {
    let timeHr = this.state.hourCounter
    let timeMin = this.state.minuteCounter
    timeHr = (timeHr < 10) ? '0' + timeHr.toString() : timeHr.toString()
    timeMin = (timeMin < 10) ? '0' + timeMin.toString() : timeMin.toString()
    let time = moment(timeHr + timeMin, "hmm").format("HH:mm")
    this.props.saveNewAlert(time)
    //post alert to firebase
  };

  cancelButton = () => {
    console.log('cancel')
  };

  deleteButton = (time) => {
    console.log("delete")
    //delete alert from firebase
  };

  render() {
    return(
      <div>
        <Link to={`/home`}>Home</Link>
        <div><Link to={`/alert`}>Back</Link></div>

          <div className="hours">
            <button onClick={this.handleHrIncrease}>++</button>
            <AlarmDigit counterVal={this.state.hourCounter} />
            <button onClick={this.handleHrDecrease}>--</button>
          </div>

          <div className="minutes">
            <button onClick={this.handleMinIncrease}>++</button>
            <AlarmDigit counterVal={this.state.minuteCounter}/>
            <button onClick={this.handleMinDecrease}>--</button>
          </div>

          <div className="buttons">
            <button onClick={this.saveButton}>Save</button>
            <button onClick={this.cancelButton}>Cancel</button>
            <button onClick={this.deleteButton}>Delete</button>
          </div>
        </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      saveNewAlert: (time) => {
        dispatch({type: "CREATE_ALERT", time: time})
      }
    }
  }

export default connect(undefined, mapDispatchToProps)(CreateAlert)
