import React, {Component} from 'react'
import {Link} from 'react-router'

class Diary extends Component {

  render() {
    return (
      <div>
      <div>
        <Link to={`/home`}>Home</Link>
      </div>
        <div>Diary</div>
      </div>
    )
  }
}

export default Diary