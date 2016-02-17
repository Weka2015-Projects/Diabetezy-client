import React, {Component} from 'react'
import {Link} from 'react-router'
import AlarmDigit from './alarmDigit.jsx'
import moment from 'moment'
import {users} from '../../test-data.json'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
class CreateAlert extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter1: 11,
      counter2: 2,
      times: [{time: "0715"}]
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
    let time = moment(timeHr + timeMin, "hmm").format("HH:mm")
    this.props.saveNewAlert(time)
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
    //delete alert from firebase
  };

  render() {
    return(
      <div>
      <Link to={`/home`}>Home</Link>
      <div><Link to={`/alert`}>Back</Link></div>

        <div id="hours" className="hours">
          <Button onClick={this.handleHrIncrease} className='btn btn-default' bsStyle="success">++</Button>
          <AlarmDigit counterVal={this.state.counter1} ref="hourDigit" />
          <Button onClick={this.handleHrDecrease} className='btn btn-default' bsStyle="success">--</Button>
        </div>

        <div className="minutes">
          <Button onClick={this.handleMinIncrease} className='btn btn-default' bsStyle="success">++</Button>
          <AlarmDigit counterVal={this.state.counter2} ref="minuteDigit" />
          <Button onClick={this.handleMinDecrease} className='btn btn-default' bsStyle="success">--</Button>
        </div>

        <div className="buttons">
          <Button onClick={this.saveButton} className='btn btn-default' bsStyle="success">Save</Button>
          <Button onClick={this.cancelButton} className='btn btn-default' bsStyle="success">Cancel</Button>
          <Button onClick={this.deleteButton} className='btn btn-default' bsStyle="success">Delete</Button>
        </div>



      </div>
      )
    }
  }
function mapDispatchToProps(dispatch) {
  return {
    saveNewAlert: (time) => {
      dispatch({type: "CREATE_ALERT", time: time})
    }
  }
}
export default connect(undefined, mapDispatchToProps)(CreateAlert)
