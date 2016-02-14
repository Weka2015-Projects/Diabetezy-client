import React, {Component} from 'react'
import {Link} from 'react-router'
import AlarmDigit from './alarmDigit.jsx'

class CreateAlert extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter1: 1,
      counter2: 2,
      times: [{time: '1310'}]

    }
  }




  handleHrIncrease = () => {
    this.state.counter1 ++
    if (this.state.counter1 >= 24) {
      this.state.counter1 = 0
    }
    this.setState(this.state)
  };

  handleHrDecrease = () => {
    this.state.counter1 --
    if (this.state.counter1 < 0) {
      this.state.counter1 = 23
    }
    this.setState(this.state)
  };

  handleMinIncrease = () => {
    this.state.counter2 ++
    if (this.state.counter2 >= 60) {
      this.state.counter2 = 0
    }
    this.setState(this.state)
  };

  handleMinDecrease = () => {
    this.state.counter2 --
    if (this.state.counter2 < 0) {
      this.state.counter2 = 59
    }
    this.setState(this.state)
  };


  saveButton = () => {
    let timeHr = this.state.counter1
    let timeMin = this.state.counter2
    timeHr = (timeHr < 10) ? '0' + timeHr.toString() : timeHr.toString()
    timeMin = (timeMin < 10) ? '0' + timeMin.toString() : timeMin.toString()
    let time = timeHr + timeMin
    console.log(time)
    //post alert to firebase
  };

  cancelButton = () => {
    let gub = this.state.times[0].time
    let gubgub = (this.state.counter1 = parseInt(gub.substring(0,2)))
    let gubgubgub =(this.state.counter2 = parseInt(gub.substring(2,4)))
    this.setState(this.state)
    //redirect to alert page
  };

  deleteButton = () => {
    console.log("delete")
    //delete alert from firebase
  };

  render() {
    return(
      <div>
      <Link to={`/home`}>Home</Link>
      <div><Link to={`/alert`}>Back</Link></div>

        <div id="hours" className="hours">
          <button onClick={this.handleHrIncrease}>++</button>
          <AlarmDigit counterVal={this.state.counter1} ref="hourDigit" />
          <button onClick={this.handleHrDecrease}>--</button>
        </div>

        <div className="minutes">
          <button onClick={this.handleMinIncrease}>++</button>
          <AlarmDigit counterVal={this.state.counter2} ref="minuteDigit" />
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

export default CreateAlert
