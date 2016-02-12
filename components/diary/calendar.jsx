import React, {Component} from 'react'
import Day from './days.jsx'

class Calendar extends Component {
    
  render() {
    let month = new Array(31).fill('').map((_, idx) => { return <Day key={idx} index={idx}/>
  })
    return <div id="month">
      <h1>Month yo</h1>
      {month}
      </div>
  }
}
export default Calendar