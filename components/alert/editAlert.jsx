import React, {Component} from 'react'
import {Link} from 'react-router'
import moment from 'moment'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {deleteAlert} from '../../firebaseWrapper'

class EditAlert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.params.id,
      time: this.props.params.time
    }
    this.handleAlertTime()
  }

  handleAlertTime = () => {
    let splitAlertHour = (this.state.hourCounter = parseInt(this.state.time.substring(0,2)))
    let splitAlertMinute = (this.state.minuteCounter = parseInt(this.state.time.substring(3,5)))
  };

  deleteButton = () => {
    const id = this.state.id
    this.props.destroy(id)
  };

  render() {
    return(
      <div>
        <div className="alert-nav">
          <Link to={`/home`}>Home | </Link>
          <Link to={`/alert`}>Back</Link>
        </div>
      <div className="edit-alert">  
        <h2>{this.state.time}</h2>

        <div className="buttons">
            <Button onClick={this.deleteButton}>Remove Alert</Button>
        </div>
      </div>
    </div>
    )
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      destroy: (id) => {
        deleteAlert({id: id}, (id) => {
          dispatch({type: 'DELETE_ALERT', id: id})
          }
      )}
    }
  }

export default connect(undefined, mapDispatchToProps)(EditAlert)