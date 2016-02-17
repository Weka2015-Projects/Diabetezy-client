import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class Alert extends Component {

  render() {
    console.log(this.props)
    let alertsArray = this.props.alerts.map((alert, id) => {
      const time = alert.get('time')
      return <div key={alert.get('id')}><Link to={`/alerts/${id}/${time}`}>{alert.get('time')}</Link></div>
    })
    return(
      <div>
        <div className="navigation">
          <Link to={`/home`}>Home</Link>
        </div>
        <div><Link to={`/createAlert`}>Create Alert</Link></div>
        <div>{alertsArray}</div>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    alerts: state.get('alerts'),
  }
}

export default connect(mapStateToProps)(Alert)
