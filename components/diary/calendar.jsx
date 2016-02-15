import React, {Component} from 'react'
import Day from './days.jsx'
import $ from 'jquery'
import moment from 'moment'
import {users} from '../../test-data.json'
import {connect} from 'react-redux'

var testdata = []

// const allDataInUserObject = () => {

//   for(var i = 0; i < (users[0].tests).length; i++) {
//     var katie = users[0].tests[i].timestamp
//     testdata.push(katie)
//   }
//   testdata.sort()
//   return testdata
// }

const dataForMonth = (bih) => {
  for(var i = 0; i < (users[0].tests).length; i++) {
    var katie = users[0].tests[i].timestamp
    if((katie > moment(bih).startOf('month')) && (katie < moment(bih).endOf('month'))){
      testdata.push(katie)
    }
  } return testdata
}


class Calendar extends Component {
    constructor(props) {
      super(props)

      this.state = {
        month: [ {value: "No test taken", timestamp: "No test taken", date: '1'} ,{value: "No test taken", timestamp: "No test taken", date: "2"} ,{value: "No test taken", timestamp: "No test taken", date : "3"}, {value: "No test taken", timestamp: "No test taken", date: '4'} ,{value: "No test taken", timestamp: "No test taken", date: "5"} ,{value: "No test taken", timestamp: "No test taken", date : "6"},
        {value: "No test taken", timestamp: "No test taken", date: '7'} ,{value: "No test taken", timestamp: "No test taken", date: "8"} ,{value: "No test taken", timestamp: "No test taken", date : "9"} ,{value: "No test taken", timestamp: "No test taken", date: '10'} ,{value: "No test taken", timestamp: "No test taken", date: "11"} ,{value: "No test taken", timestamp: "No test taken", date : "12"},
        {value: "No test taken", timestamp: "No test taken", date: '13'} ,{value: "No test taken", timestamp: "No test taken", date: "14"} ,{value: "No test taken", timestamp: "No test taken", date : "15"}, {value: "No test taken", timestamp: "No test taken", date: '16'} ,{value: "No test taken", timestamp: "No test taken", date: "17"} ,{value: "No test taken", timestamp: "No test taken", date : "18"},
        {value: "No test taken", timestamp: "No test taken", date: '19'} ,{value: "No test taken", timestamp: "No test taken", date: "20"} ,{value: "No test taken", timestamp: "No test taken", date : "21"}, {value: "No test taken", timestamp: "No test taken", date: '22'} ,{value: "No test taken", timestamp: "No test taken", date: "23"} ,{value: "No test taken", timestamp: "No test taken", date : "24"},
        {value: "No test taken", timestamp: "No test taken", date: '25'} ,{value: "No test taken", timestamp: "No test taken", date: "26"} ,{value: "No test taken", timestamp: "No test taken", date : "27"}, {value: "No test taken", timestamp: "No test taken", date: '28'} ,{value: "No test taken", timestamp: "No test taken", date: "29"} ,{value: "No test taken", timestamp: "No test taken", date : "30"},
        {value: "No test taken", timestamp: "No test taken", date: '31'} 
        ]
      }
    }
 
  printTest(idx) {
  this.state.currentday = idx + 1
  $('#inputs').css('display', 'block')
  // console.log(dataForMonth(January))
   date.innerHTML = this.state.month[idx].date,
   time.innerHTML = this.state.month[idx].time,
   bsl.innerHTML = this.state.month[idx].value     
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

  addTestToDayObject(idx) {
    console.log("button pressed")
    var time = this.refs.time.value
    const timestamp = moment(`${this.refs.currentYear.value}-${this.refs.currentMonth.value}-${this.state.currentday} ${time}`).unix()
    console.log(timestamp)
    this.props.saveNewTest(timestamp, this.refs.test_value.value)
  }

  render() {
    
    let month = this.state.month.map((_,idx) => {
      return <Day key={idx} index={idx} clickCb={this.printTest.bind(this)}/>
  })

    console.log(this.props.tests)

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
          Date: <span id="date"></span>/MONTH/{new Date().getFullYear()}<br/>
          Blood Sugar Level: <span id="bsl"></span><br/>
          Time: <span id="time"></span><br/>
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

