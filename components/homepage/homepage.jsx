import React, {Component} from 'react'
import {Link} from 'react-router'

class Homepage extends Component {
  render(){
    return (
      <div className="alert-nav">
          <p><Link to={`/graph`}>Graph</Link> | 
          <Link to={`/diary`}> Diary</Link> | 
          <Link to={`/alert`}> Alert</Link>
          </p>
      </div>
    )
  }
}

export default Homepage