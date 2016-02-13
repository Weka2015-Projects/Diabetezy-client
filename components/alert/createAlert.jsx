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
    // if (this.state.counter1 >= this.props.numberSystem) {
    //   this.state.counter1 = 0
    // }
    this.setState(this.state)
  }

  handleHrDecrease() {
    this.state.counter1 --
    // if (this.state.counter1 < 0) {
    //   this.state.counter1 = this.props.numberSystem
    // }
    this.setState(this.state)
  }

  handleIncrease() {
    this.state.counter2 ++
    // if (this.state.counter1 >= this.props.numberSystem) {
    //   this.state.counter1 = 0
    // }
    this.setState(this.state)
  }

  handleDecrease() {
    this.state.counter2 --
    // if (this.state.counter1 < 0) {
    //   this.state.counter1 = this.props.numberSystem
    // }
    this.setState(this.state)
  }

  render() {
    return(
      <div>
      <Link to={`/home`}>Home</Link>
      <div><Link to={`/alert`}>Back</Link></div>

        <div id="hours" className="hours">
          <button onClick={this.handleHrIncrease.bind(this)}>++</button>
          <AlarmDigit numberSystem={24} counterVal={this.state.counter1} ref="hourDigit" />
          <button onClick={this.handleHrDecrease.bind(this)}>--</button>
        </div>

        <div className="minutes">
          <button onClick={this.handleIncrease.bind(this)}>++</button>
          <AlarmDigit numberSystem={60} counterVal={this.state.counter2} ref="minuteDigit" />
          <button onClick={this.handleDecrease.bind(this)}>--</button>
        </div>

        <div className="buttons">
          <button>Save</button>
          <button>Cancel</button>
          <button>Delete</button>
        </div>



      </div>
      )
    }
  }

export default CreateAlert
