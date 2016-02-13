import React, {Component} from 'react'
import Day from './days.jsx'
import $ from 'jquery'
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

    var date = document.getElementById('date')
    var time = document.getElementById('time')
    var bsl = document.getElementById('bsl')

    return date.innerHTML = this.state.month[idx].date,
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
        <div id="change record">
          {month}
          <div id="inputs">
            <input className="test" ref="blood_sugar_level" placeholder="Enter your test result" type="text"></input>
            <input className="test" ref="time" placeholder="Enter your test result" type="text"></input>
            <input className="test" ref="date" placeholder="Enter your test result" type="text"></input>
            <button /*onClick={this.handleClick.bind(this)}*/>Save Result</button>
            <p className="results">
            Date: <span id="date"></span>/{}/{new Date().getFullYear()}<br/>
            Blood Sugar Level: <span id="bsl"></span><br/>
            Time: <span id="time"></span><br/>
            </p>

          </div>
        </div>
      </div>
  }
}
// function mapStateToProps(state) {
//   return {
//     tests: state.get('tests')
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDay: (id) => { 
//       dispatch({
//         type: 'ADD_TEST_TO_CART',
//         id: parseInt(id)
//       })
//     }
//   }
// }
export default Calendar