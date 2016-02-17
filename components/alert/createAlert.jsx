import React, {Component} from 'react'
import {Link} from 'react-router'
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
      currentTime : moment().format('HH:mm')
    }
     this.handleAlertTime()
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


  handleCountertoDB = () => {
    let hour = this.state.hourCounter
    let minute = this.state.minuteCounter
    hour = (hour < 10) ? '0' + hour.toString() : hour.toString()
    minute = (minute < 10) ? '0' + minute.toString() : minute.toString()
    let time = moment(hour + minute, 'hmm').format('HH:mm')
    return time
  };

  saveButton = () => {
    let time = this.handleCountertoDB()
    this.props.saveNewAlert(time)
    alert('tiny little handz')
  };

  handleAlertTime = () => {
    let splitAlertHour = (this.state.hourCounter = parseInt(this.state.currentTime.substring(0,2)))
    let splitAlertMinute = (this.state.minuteCounter = parseInt(this.state.currentTime.substring(3,5)))
  };

  render() {
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
          </div>

      </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      saveNewAlert: (time) => {
        saveAlert({time: time}, (id) => {
          dispatch({type: "CREATE_ALERT", id: id, time: time})
        })
      }
    }
  }

export default connect(undefined, mapDispatchToProps)(CreateAlert)
