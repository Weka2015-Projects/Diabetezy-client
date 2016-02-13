import React, {Component} from 'react'
import Day from './days.jsx'
import $ from 'jQuery'
class Calendar extends Component {
    constructor(props) {
      super(props)

      this.state = {
        // month: new Array(3).fill({date: "No test on this date", time: "No test taken at this time", test: "No test taken"})
        month: [ {blood_sugar_level: "No test taken", time: "No test taken", date: '1'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "2"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "3"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '4'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "5"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "6"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '7'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "8"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "9"} ,{blood_sugar_level: "No test taken", time: "No test taken", date: '10'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "11"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "12"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '13'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "14"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "15"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '16'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "17"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "18"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '19'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "20"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "21"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '22'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "23"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "24"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '25'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "26"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "27"}, {blood_sugar_level: "No test taken", time: "No test taken", date: '28'} ,{blood_sugar_level: "No test taken", time: "No test taken", date: "29"} ,{blood_sugar_level: "No test taken", time: "No test taken", date : "30"},
        {blood_sugar_level: "No test taken", time: "No test taken", date: '31'} 
        ]
      }
    }
 
  // console.log("day 1", this.state.month[1])

  printTest(idx) {

    /*tests
    console.log(idx + 1, this.state.month)
    console.log(idx + 1, this.state.month[idx])
    console.log(idx + 1, this.state.month[idx].date = "9")
    console.log(idx + 1, this.state.month)*/

    $('.test').css('display', 'active')

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
          <input className="test" placeholder="Enter your test result" type="text"></input>
          <input className="test" placeholder="Enter your test result" type="text"></input>
          <input className="test" placeholder="Enter your test result" type="text"></input>
          <button type="submit" className="test">Save Result</button>
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