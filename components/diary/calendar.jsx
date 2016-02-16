/*
TO DO:
  - Have individual cell light up
  - padding around elements on page
  - tests
*/

import React, {Component} from 'react'
import Day from './days.jsx'
import $ from 'jquery'
import moment from 'moment'
import {users} from '../../test-data.json'
import {connect} from 'react-redux'
import {List, toJS} from 'immutable'
import {Input, Button, Table} from 'react-bootstrap'
import {saveBloodTest, deleteBloodTest} from '../../firebaseWrapper'

class Calendar extends Component {

  constructor(props){
    super(props) 
    
    this.state = {
      currentYear: moment().format('YYYY'),
      currentMonth: moment().format('M'),
      currentDay: moment().format('D'),
      currentTime: moment().format('HH:mm'),
      newTestValue: 0
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
    this.props.saveNewTest(timestamp, this.state.newTestValue)
  }

  deleteTest(test) {
    var deleteDayTest = this.testsOnSelectedDay().toJS()
    var id = Object.keys(deleteDayTest)[0]
    return this.props.destroyBloodTest(id)
    }

  printTest(dayNum) {
    this.setState({currentDay: dayNum + 1})
    $('#inputs').css('display', 'inline-block')
    $('.results').css('display', 'inline-block')
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

  saveTest(e) {
    this.setState({newTestValue: e.target.value})
  }

  render() {
    var month = []
    for(var dayNum = 0; dayNum < 31; dayNum++){
      month.push(<Day key={dayNum} index={dayNum} clickCb={this.printTest.bind(this)}/>)
    }
    var visibleTests = this.testsOnSelectedDay().map((test) => {
      return (
        <Table striped hover condensed relative>
        <tbody>
        <tr>
          <th><strong>Blood sugar level</strong></th>
          <th colSpan="2"><strong>Time of test</strong></th>
        </tr>
          <tr key={'test_' + test.get('id')}>
            <td>{test.get('value')} mmol /L</td>
            <td>{moment.unix(test.get('timestamp')).format("hh:mm a")}</td>
            <td><Input type="submit" src="" value="delete" onClick={this.deleteTest.bind(this)}></Input></td>
          </tr>
          </tbody>
        </Table>
    )}
  )

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
        <Input className="test" type="number" label="Blood Test Result: " value={this.state.newTestValue} onChange={this.saveTest.bind(this)}></Input><br/>
        <Input className="test" type="time" value={this.state.currentTime} onChange={this.saveTime.bind(this)} label="Time: ">
        </Input><br/>
        <Button onClick={this.createTest.bind(this)} className='btn btn-default' bsStyle="success" id="saveResult">Save Result</Button>
      </div>
      <div className="results">
        {visibleTests}
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
      saveBloodTest({timestamp: timestamp, value: value}, (id) => {
        dispatch({type: 'CREATE_BLOOD_TEST', id: id, timestamp: timestamp, value: value})
      })
    },

    destroyBloodTest: (id) => {
      deleteBloodTest({id: id}, (id) => {
        dispatch({type: 'DELETE_BLOOD_TEST', id: id})
      }
    )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)


