import React, {Component} from 'react'

class AlarmDigit extends Component {
  constructor(props){
    super()
    this.state = {
      value: 0,
      increaseCounter: 0,
      decreaseCounter: 0
    }
  }

  handleIncrease() {
    this.state.value ++
    this.state.increaseCounter ++
    if (this.state.value >= this.props.numberSystem) {
      this.state.value = 0
    }
    this.setState(this.state)
  }

  handleDecrease() {
    this.state.value --
    this.state.decreaseCounter --
    if (this.state.value < 0) {
      this.state.value = this.props.numberSystem
    }
    this.setState(this.state)
  }

  handleChange(e) {
    let val = e.target.value
    this.setState({value: val})
  }

  render() {
    let { value } = this.props
    return(
      <div>
        <button onClick={this.handleIncrease.bind(this)}>Up</button>
        <input type="text" defaultValue="0" value={this.state.value} onchange={this.handleChange.bind(this)}/>
        <button onClick={this.handleDecrease.bind(this)}>Down</button>
      </div>
      )
    }
  }

export default AlarmDigit
