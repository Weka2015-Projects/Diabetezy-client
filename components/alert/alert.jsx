import React, {Component} from 'react'
import {Link} from 'react-router'


class Alert extends Component {
  render() {
    return(
      <div>
        <Link to={`/home`}>Home</Link>
        <div>alert</div>
     </div>
    )
  }
}

export default Alert