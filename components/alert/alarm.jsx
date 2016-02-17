import React, {Component} from 'react'
import {connect} from 'react-redux'
import Alert from './alert.jsx'
import moment from 'moment'

class Alarm extends Component {



  soundTheAlarm(){
    let audio = new Audio('audio/airhorn.mp3')
    this.props.alerts.forEach(function(alert){
      if((alert.get('time')) == moment().format('HH:mm')){
        audio.play()
      }
    })
  };

  componentWillMount() {
    this.interval = setInterval(this.soundTheAlarm.bind(this), 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    this.interval = undefined
  }

  render() {
    return(
      <span>
        {this.soundTheAlarm}
      </span>
      )
    }
  }

  const mapStateToProps = (state) => {
  return {
    alerts: state.get('alerts')
  }
}

export default connect(mapStateToProps)(Alarm)
