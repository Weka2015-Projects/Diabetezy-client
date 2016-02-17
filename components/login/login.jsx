import React, {Component} from 'react'
import {Link} from 'react-router'

class Login extends Component{
  render() {
    return (
      <div>
        <Link to={`/home`}>Login</Link>
      </div>
    )
  }
}

export default Login