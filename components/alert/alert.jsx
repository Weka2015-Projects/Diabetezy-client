import React, {Component} from 'react'
import {Link} from 'react-router'


class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertsArray: ["07:15", "9:29", "17:30"]
    }
  }

  render() {
    let alertsArray = this.state.alertsArray.map((alert, index) => {
      return <div key={index}>{alert}</div>
    })

    return(
      <div>
        <Link to={`/home`}>Home</Link>
        <div><Link to={`/createAlert`}>Create Alert</Link></div>
        <div>{alertsArray}</div>
     </div>
    )
  }
}

export default Alert
