import React, {Component} from 'react'
import Day from './days.jsx'

class Calendar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        month: new Array(31).fill((new Array(4)).fill({time: "noon", blood_sugar_level: "7"}))
      }
    }

  printTest(idx) {
    console.log("month", this.state.month)
    console.log("days", this.state.month[1][0].time)
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
      return <Day key={idx} index={idx} fill={{date: idx, blood_sugar_level: ''}} clickCb={this.printTest.bind(this)}/>
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