import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Panel} from 'react-bootstrap'
class Alert extends Component {

  render() {
    let alertsArray = this.props.alerts.map((alert, id) => {
      const time = alert.get('time')
      return (
          <div key={alert.get('id')}>{alert.get('time')}<Link to={`/alerts/${id}/${time}`} className="alertTime">[x]</Link></div>
        )
    })
    return(
      <div>
        <div className="alert-nav">
          <Link to={`/home`}>Home</Link> | <Link to={`/createAlert`}>Create An Alert +</Link>
        </div>
        <div>
        </div>
        <Panel>
          {alertsArray}
        </Panel>
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
