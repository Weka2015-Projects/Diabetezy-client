import React, {Component} from 'react'
import {Link} from 'react-router'

class Homepage extends Component {
  render(){
    return (
      <div>
        <div>
          <Link to={`/graph`}>Graph</Link>
        </div>
        <div>
          <Link to={`/diary`}>Diary</Link>
        </div>
        <div>
          <Link to={`/alert`}>Alert</Link>
        </div>
      </div>
    )
  }
}

export default Homepage