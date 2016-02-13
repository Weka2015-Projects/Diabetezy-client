import React, {Component} from 'react'
import Day from './days.jsx'

class Calendar extends Component {
    constructor(props) {
      super(props)

      this.state = {
        // month: new Array(3).fill({date: "No test on this date", time: "No test taken at this time", test: "No test taken"})
        month: [ {date: '1'} ,{date: "2"} ,{date : "3"}, {date: '4'} ,{date: "5"} ,{date : "6"},
        {date: '7'} ,{date: "8"} ,{date : "9"} ,{date: '10'} ,{date: "11"} ,{date : "12"},
        {date: '13'} ,{date: "14"} ,{date : "15"}, {date: '16'} ,{date: "17"} ,{date : "18"},
        {date: '19'} ,{date: "20"} ,{date : "21"}, {date: '22'} ,{date: "23"} ,{date : "24"},
        {date: '25'} ,{date: "26"} ,{date : "27"}, {date: '28'} ,{date: "29"} ,{date : "30"},
        {date: '31'} 
        ]
      }
    }
 
  // console.log("day 1", this.state.month[1])

  printTest(idx) {
    console.log(idx + 1, this.state.month)
    console.log(idx + 1, this.state.month[idx])
    console.log(idx + 1, this.state.month[idx].date = "9")
    console.log(idx + 1, this.state.month)



    // idx === 29 ?
    //   console.log(`Day ${idx+1} clicked mofos`) :
    // idx === 5 ?
    //   console.log(`Day ${idx+1} clicked yay`) :
    // idx === 10 ?
    //   console.log(`Day ${idx+1} oaisdhf`) :
    //   console.log(`fro`)

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
        <div id="katie">
        {month}
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