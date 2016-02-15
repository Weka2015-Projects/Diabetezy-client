import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Alert extends Component {

  render() {
    let alertsArray = this.props.alerts.map((alert) => {
      const id = alert.get('id')
      return <div key={alert.get('id')}><Link to={`/alerts/${id}`}>{alert.get('time')}</Link></div>
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

const mapStateToProps = (state) => {
  return {
    alerts: state.get('alerts')
  }
}

export default connect(mapStateToProps)(Alert)
