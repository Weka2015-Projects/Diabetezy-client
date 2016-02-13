import React, {Component} from 'react'
import {Link} from 'react-router'
import AlarmDigit from './alarmDigit.jsx'

class CreateAlert extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter1: 1,
      counter2: 2
    }
  }

  handleHrIncrease() {
    this.state.counter1 ++
    if (this.state.counter1 >= 24) {
      this.state.counter1 = 0
    }
    this.setState(this.state)
  }

  handleHrDecrease() {
    this.state.counter1 --
    if (this.state.counter1 < 0) {
      this.state.counter1 = 23
    }
    this.setState(this.state)
  }

  handleIncrease() {
    this.state.counter2 ++
    if (this.state.counter2 >= 60) {
      this.state.counter2 = 0
    }
    this.setState(this.state)
  }

  handleDecrease() {
    this.state.counter2 --
    if (this.state.counter2 < 0) {
      this.state.counter2 = 59
    }
    this.setState(this.state)
  }

  saveButton(){
    let timeHr = document.getElementsByTagName("p")[0].innerHTML
    let timeMin = document.getElementsByTagName("p")[1].innerHTML
    let time = timeHr + ' : ' + timeMin
    console.log(time)
    //post to firebase
  }

  cancelButton(){
    console.log("hi")
    //redirect to alert page
  }

  deleteButton(){
    console.log("hi")
    //delete alert
  }

  render() {
    return(
      <div>
      <Link to={`/home`}>Home</Link>
      <div><Link to={`/alert`}>Back</Link></div>

        <div id="hours" className="hours">
          <button onClick={this.handleHrIncrease.bind(this)}>++</button>
          <AlarmDigit counterVal={this.state.counter1} ref="hourDigit" />
          <button onClick={this.handleHrDecrease.bind(this)}>--</button>
        </div>

        <div className="minutes">
          <button onClick={this.handleIncrease.bind(this)}>++</button>
          <AlarmDigit counterVal={this.state.counter2} ref="minuteDigit" />
          <button onClick={this.handleDecrease.bind(this)}>--</button>
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
