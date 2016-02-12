import React, {Component} from 'react'
import {Link} from 'react-router'

class CreateAlert extends Component {
  constructor(props){
    super(props)

    this.state = {hr: 0, min: 0}
  }

  upHourClick(e) {
    if(this.state.hr ===24){
      this.setState({
        hr: this.state.hr -24
      })
    } else{
      this.setState({
        hr: this.state.hr +1
      })
    }
  }

  downHourClick(e) {
    if(this.state.hr ===0){
      this.setState({
        hr: this.state.hr +24
      })
    } else{
      this.setState({
        hr: this.state.hr -1
      })
    }
  }

  upMinuteClick(e) {
    if(this.state.min ===59){
      this.setState({
        min: this.state.min -59
      })
    } else{
      this.setState({
        min: this.state.min +1
      })
    }
  }

  downMinuteClick(e) {
    if(this.state.min ===0){
      this.setState({
        min: this.state.min +59
      })
    } else{
      this.setState({
        min: this.state.min -1
      })
    }
  }

  render() {
    return(
      <div>
      <Link to={`/home`}>Home</Link>
      <div><Link to={`/alert`}>Back</Link></div>
      <div className="hours">
      <button onClick={this.upHourClick.bind(this)}>Count Up!</button>
      <h1>{this.state.hr}</h1>
      <button onClick={this.downHourClick.bind(this)}>Count Down!</button>
      </div>
      <div className="minutes">
      <button onClick={this.upMinuteClick.bind(this)}>Count Up!</button>
      <h1>{this.state.min}</h1>
      <button onClick={this.downMinuteClick.bind(this)}>Count Down!</button>
      </div>
      <div>
      <button>Save</button>
      <button>Delete</button>
      <button>Cancel</button>
      </div>
      </div>
      )
  }
}

export default CreateAlert
