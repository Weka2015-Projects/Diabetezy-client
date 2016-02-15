import React, {Component} from 'react'
import Day from './days.jsx'
import $ from 'jquery'
import moment from 'moment'
import {users} from '../../test-data.json'
import {connect} from 'react-redux'
import {List} from 'immutable'

var testdata = []

// const allDataInUserObject = () => {

//   for(var i = 0; i < (users[0].tests).length; i++) {
//     var katie = users[0].tests[i].timestamp
//     testdata.push(katie)
//   }
//   testdata.sort()
//   return testdata
// }


class Calendar extends Component {

  constructor(props){
    super(props) 
    
    this.state = {selectedDaysTests: List()}
  }

  testsInSelectedDay() {
    var currentDay = this.selectedDay()
    var start = currentDay.startOf('day').unix()
    var end = currentDay.endOf('day').unix()

    return this.props.tests.filter((test) => {
      var timestamp = test.get('timestamp')
      return timestamp < end && timestamp > start
    // })
    // for(var i = 0; i < (users[0].tests).length; i++) {
    // var katie = users[0].tests[i].timestamp
    // if((katie > moment(bih).startOf('month')) && (katie < moment(bih).endOf('month'))){
    //   testdata.push(katie)
    })
}

  printTest(idx) {
  this.state.currentday = idx + 1
  $('#inputs').css('display', 'block')
  var currentDay = this.selectedDay()
  var tests = this.testsInSelectedDay()
  this.setState({selectedDaysTests: tests})
   // date.innerHTML = this.state.month[idx].date,

   // time.innerHTML = this.state.month[idx].time,
   // bsl.innerHTML = this.state.month[idx].value     
    // TESTS:
    // console.log(idx + 1, this.state.month)
    // console.log("Display index number +1 to match date value",
    // idx + 1, this.state.month[idx][0], this.state.month[idx].date)
    // console.log("Expect date to change at clicked index",
    // idx + 1, this.state.month[idx].date = "9")
    // console.log("Expect time value to change at clicked index", 
    // idx + 1, this.state.month[idx].time = "18:00")
    // console.log("Expect b_s_l to change at clicked index", 
    // idx + 1, this.state.month[idx].value = "9.0")
    // console.log("Expect object at clicked index to have changed, and all others 
      // to remain the same", idx + 1, this.state.month)
  }

  selectedDay() {
    var time = this.refs.time.value
    return moment(`${this.refs.currentYear.value}-${this.refs.currentMonth.value}-${this.state.currentday} ${time}`)
  }

  addTestToDayObject(idx) {
    const timestamp = this.selectedDay().unix()
    this.props.saveNewTest(timestamp, this.refs.test_value.value)
  }

  render() {
    console.log(this.props.tests.last().get('timestamp'))
    var month = []
    for(var idx = 0; idx < 31; idx++){
      month.push(<Day key={idx} index={idx} clickCb={this.printTest.bind(this)}/>)
    }
    var selectedDaysTests = this.state.selectedDaysTests.map((test) => {
      return <div>value: {test.get('value')}</div>

    })

    return <div id="month">

      <div>
        <select ref="currentMonth">
          <option value="12">December</option>
          <option value="1">January</option>
          <option value="2">February</option>
        </select>
          <select ref="currentYear">
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
        <input className="test" ref="time" type="time"></input><br/>

        <button onClick={this.addTestToDayObject.bind(this)}>Save Result</button>
        <p className="results">
          {selectedDaysTests}
        </p>
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

