import React, {Component} from 'react'
import {Link} from 'react-router'
import moment from 'moment'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {saveAlert} from '../../firebaseWrapper'
import {deleteAlert} from '../../firebaseWrapper'

class EditAlert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hourCounter: 0,
      minuteCounter: 0,
      hourCounterLimit: 24,
      minuteCounterLimit: 59,
      id: this.props.params.id,
      time: this.props.params.time
    }
  }

  // handle counter Limits
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

  deleteButton = () => {
    const id = this.state.id
    console.log(id)
    return this.props.destroy(id)
  };

  render() {
    return(
      <div>
        <div>
          <Link to={`/home`}>Home</Link><br />
          <Link to={`/alert`}>Back</Link>
        </div>

      <h2>EDIT</h2>

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
          dispatch({type: "CREATE_ALERT", id: id, time: time})
        })
      },

      destroy: (id) => {
        deleteAlert({id: id}, (id) => {
          dispatch({type: 'DELETE_ALERT', id: id})
          }
      )}


    }
  }

export default connect(undefined, mapDispatchToProps)(EditAlert)

// // if alert already exists do this:
// if (this.state.alertTime || this.state.id != undefined) {
//   let alertTime = this.props.params.time
//   let splitAlertHour = (this.state.hourCounter = parseInt(alertTime.substring(0,2)))
//   let splitAlertMinute = (this.state.minuteCounter = parseInt(alertTime.substring(3,5)))
// }
