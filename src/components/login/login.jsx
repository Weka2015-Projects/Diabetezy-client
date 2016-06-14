import React, {Component} from 'react'
import {Link} from 'react-router'
import {Col} from 'react-bootstrap'
class Login extends Component{
  render() {
    return (
      <div className="alert-nav">
        <Link to={`/home`}>Login</Link>
      </div>
    )
  }
}

export default Login