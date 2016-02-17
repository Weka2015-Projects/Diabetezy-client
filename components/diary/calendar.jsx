import React, {Component} from 'react'
import Day from './days.jsx'
import $ from 'jquery'
import moment from 'moment'
import {users} from '../../test-data.json'

var testdata = []

// const allDataInUserObject = () => {

//   for(var i = 0; i < (users[0].tests).length; i++) {
//     var katie = users[0].tests[i].timestamp
//     testdata.push(katie)
//   }
//   testdata.sort()
//   return testdata
// }

const dataForMonth = (month) => {
  for(var i = 0; i < (users[0].tests).length; i++) {
    var katie = users[0].tests[i].timestamp
    if((katie > moment.startOf(month)) && (katie < moment.startOf(month))){
      testdata.push(katie)
    }
  } return testdata
}
//    find timestamp at beginning of Month
//    find timestamp at end of Month
//    include test if it is between 
//  return results
// }

// const dataForDay = (day) => {

// }

class Calendar extends Component {
    constructor(props) {
      super(props)

      this.state = {
        month: [ {blood_sugar_level: "No test taken", time: "No test taken", date: '1'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "2"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "3"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '4'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "5"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "6"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '7'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "8"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "9"} ,{blood_sugar_level: "No test taken", time: "No test taken", date: '10'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "11"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "12"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '13'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "14"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "15"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '16'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "17"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "18"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '19'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "20"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "21"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '22'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "23"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "24"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '25'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "26"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "27"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '28'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "29"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "30"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '31'} 
        ]
      }
    }
 
  printTest(idx) {
  $('#inputs').css('display', 'block')

   date.innerHTML = this.state.month[idx].date,
   time.innerHTML = this.state.month[idx].time,
   bsl.innerHTML = this.state.month[idx].blood_sugar_level     
    // TESTS:
    // console.log(idx + 1, this.state.month)
    // console.log("Display index number +1 to match date value",
    // idx + 1, this.state.month[idx][0], this.state.month[idx].date)
    // console.log("Expect date to change at clicked index",
    // idx + 1, this.state.month[idx].date = "9")
    // console.log("Expect time value to change at clicked index", 
    // idx + 1, this.state.month[idx].time = "18:00")
    // console.log("Expect b_s_l to change at clicked index", 
    // idx + 1, this.state.month[idx].blood_sugar_level = "9.0")
    // console.log("Expect object at clicked index to have changed, and all others 
      // to remain the same", idx + 1, this.state.month)
  }

  addTestToDayObject(idx) {
    console.log("button pressed")
    var time = this.refs.time.value
    this.refs.time.value = ''

    this.setState ({
      month: (idx, time: time)
    })
  }

  render() {
    
    let month = this.state.month.map((_,idx) => {
      return <Day key={idx} index={idx} clickCb={this.printTest.bind(this)}/>
  })

    return <div id="month">

      <div>
        <select>
          <option value="december">December</option>
          <option value="january">January</option>
          <option value="february">February</option>
        </select>
      </div>

      <div id="change-record">
        {month}
      </div>

      <div id="inputs">

        <label>Blood Test Result:</label>
        <input className="test" ref="blood_sugar_level" type="number"></input><br/>
        <label>Time:</label>
        <input className="test" ref="time" type="number"></input><br/>

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

export default Calendar