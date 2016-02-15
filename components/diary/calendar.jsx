import React, {Component} from 'react'
import Day from './days.jsx'
import $ from 'jquery'
import moment from 'moment'
import {users} from '../../test-data.json'
import {connect} from 'react-redux'
import {List} from 'immutable'

class Calendar extends Component {

  constructor(props){
    super(props) 
    
    this.state = {
      currentYear: moment().format('YYYY'),
      currentMonth: moment().format('M'),
      currentDay: moment().format('D'),
      currentTime: moment().format('HH:mm'),
    }
  }

  selectedDay() {
    var timestring = `${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDay} ${this.state.currentTime}`
    return moment(timestring)
  }

  testsOnSelectedDay() {
    var currentDay = this.selectedDay()
    var start = currentDay.startOf('day').unix()
    var end = currentDay.endOf('day').unix()

    return this.props.tests.filter((test) => {
      var timestamp = test.get('timestamp')
      return timestamp < end && timestamp > start
    })
  }

  createTest() {
    const timestamp = this.selectedDay().unix()
    this.props.saveNewTest(timestamp, this.refs.test_value.value)
  }

  printTest(dayNum) {
    this.setState({currentDay: dayNum+1})
    $('#inputs').css('display', 'block')
  }

  saveMonth(e) {
    this.setState({currentMonth: e.target.value})
  }

  saveYear(e) {
    this.setState({currentYear: e.target.value})
  }

  saveTime(e) {
    this.setState({currentTime: e.target.value})
  }

  render() {
    var month = []
    for(var dayNum = 0; dayNum < 31; dayNum++){
      month.push(<Day key={dayNum} index={dayNum} clickCb={this.printTest.bind(this)}/>)
    }
    var visibleTests = this.testsOnSelectedDay().map((test) => {
      return <div key={'test_' + test.get('id')}>value: {test.get('value')}</div>
    })

    return <div id="month">
      <div>
        <select value={this.state.currentMonth} onChange={this.saveMonth.bind(this)}>
          <option value="12">December</option>
          <option value="1">January</option>
          <option value="2">February</option>
        </select>
          <select value={this.state.currentYear} onChange={this.saveYear.bind(this)}>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div id="change-record">
        {month}
      </div>
      <div id="inputs">
        <label>Blood Test Result:</label><br/>
        <input className="test" ref="test_value" type="number"></input><br/>
        <label>Time:</label><br/>
        <input className="test" ref="time" type="time" value={this.state.currentTime} onChange={this.saveTime.bind(this)}></input><br/>

        <button onClick={this.createTest.bind(this)}>Save Result</button>
        <div className="results">
          {visibleTests}
        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    tests: state.get('tests')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveNewTest: (timestamp, value) => {
      dispatch({type: 'CREATE_BLOOD_TEST', timestamp: timestamp,
      value: value})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calendar)

