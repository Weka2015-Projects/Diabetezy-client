import React, {Component} from 'react'
import Day from './days.jsx'

class Calendar extends Component {
    
  render() {
    let february = new Array(29).fill("x").map((_, idx) => {
      return <Day key={idx} index={idx} fill="bfhg" /*fill found in props*//>
  })

    console.log(february)
    return <div id="month">
    <div>
      <select>
        <option value="december">December</option>
        <option value="january">January</option>
        <option value="february">February</option>
        </select>
        </div>
        <div>
        {february}
      </div>
      </div>
  }
}
export default Calendar