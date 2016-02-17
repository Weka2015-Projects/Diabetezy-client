import React, {Component} from 'react'
import {Link} from 'react-router'
import AlarmDigit from './alarmDigit.jsx'
import moment from 'moment'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {saveAlert} from '../../firebaseWrapper'


class CreateAlert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hourCounter: 0,
      minuteCounter: 0,
      hourCounterLimit: 24,
      minuteCounterLimit: 59,
      alertTime: this.props.params.time,
      id: this.props.params.id,
      currentTime: moment().format('HH:mm')
    }

    // if alert already exists do this:
    if (this.state.alertTime || this.state.id != undefined) {
      let alertTime = this.props.params.time
      let splitAlertHour = (this.state.hourCounter = parseInt(alertTime.substring(0,2)))
      let splitAlertMinute = (this.state.minuteCounter = parseInt(alertTime.substring(3,5)))
    }
}

  handleCounterLimits = () => {
    if (this.state.hourCounter > this.state.hourCounterLimit) { this.state.hourCounter = 0 }
    if (this.state.hourCounter < 0) { this.state.hourCounter = this.state.hourCounterLimit }
    if (this.state.minuteCounter > this.state.minuteCounterLimit) { this.state.minuteCounter = 0 }
    if (this.state.minuteCounter < 0) { this.state.minuteCounter = this.state.minuteCounterLimit }

    this.setState(this.state)
  };

  // counter increment buttons
  handleHourIncrease = () => {
    this.state.hourCounter ++
    this.handleCounterLimits()
    this.setState(this.state)
  };

  handleHourDecrease = () => {
    this.state.hourCounter --
    this.handleCounterLimits()
    this.setState(this.state)
  };

  handleMinuteIncrease = () => {
    this.state.minuteCounter ++
    this.handleCounterLimits()
    this.setState(this.state)
  };

  handleMinuteDecrease = () => {
    this.state.minuteCounter --
    this.handleCounterLimits()
    this.setState(this.state)
  };


  saveButton = () => {
    let timeHr = this.state.hourCounter
    let timeMin = this.state.minuteCounter
    timeHr = (timeHr < 10) ? '0' + timeHr.toString() : timeHr.toString()
    timeMin = (timeMin < 10) ? '0' + timeMin.toString() : timeMin.toString()
    let time = moment(timeHr + timeMin, "hmm").format("HH:mm")
    this.props.saveNewAlert(time)
  };

  cancelButton = () => {
    console.log('cancel')
  };

  deleteButton = (time) => {
    console.log("delete")
    //delete alert from firebase
  };

  render() {
    console.log(this.props)
    return(
      <div>
        <div>
          <Link to={`/home`}>Home</Link><br />
          <Link to={`/alert`}>Back</Link>
        </div>

        <h2>{this.state.currentTime}</h2>

        <div className="hours">
          <button onClick={this.handleHourIncrease}>++</button>
            <h2>{this.state.hourCounter}</h2>
          <button onClick={this.handleHourDecrease}>--</button>
        </div>

        <div className="minutes">
          <button onClick={this.handleMinuteIncrease}>++</button>
            <h2>{this.state.minuteCounter}</h2>
          <button onClick={this.handleMinuteDecrease}>--</button>
        </div>

        <div className="buttons">
            <button onClick={this.saveButton}>Save Time</button>
            <button onClick={this.cancelButton}>Cancel</button>
            <button onClick={this.deleteButton}>Delete Time</button>
          </div>

      </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      saveNewAlert: (time) => {
        saveAlert({time: time}, (id) => {
          dispatch({type: "CREATE_ALERT", id:id, time: time})
        })
      }
    }
  }

export default connect(undefined, mapDispatchToProps)(CreateAlert)
