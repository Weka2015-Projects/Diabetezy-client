import React, {Component} from 'react'

class AlarmDigit extends Component {
  constructor(props){
    super()
    this.state = {
      value: 0
    }
  }

  handleIncrease() {
    this.state.value ++
    if (this.state.value >= this.props.numberSystem) {
      this.state.value = 0
    }
    this.setState(this.state)
  }

  handleDecrease() {
    this.state.value --
    if (this.state.value < 0) {
      this.state.value = this.props.numberSystem
    }
    this.setState(this.state)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleIncrease.bind(this)}>++</button>
        <p>{this.state.value}</p>
        <button onClick={this.handleDecrease.bind(this)}>--</button>
      </div>
      )
    }
  }

export default AlarmDigit
