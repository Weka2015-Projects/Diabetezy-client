import React, {Component} from 'react'
import {connect} from 'react-redux'
import Alert from './alert.jsx'

class Alarm extends Component {



  soundTheAlarm(){
    let date = new Date()
    let minute = date.getMinutes()
    let hour = date.getHours()
    let audio = new Audio('audio/airhorn.mp3')
    if (hour == 11 && minute == 23){

    audio.play()
    }


    console.log(this.props.alerts.get('time'))
  };

  componentWillMount() {
    this.interval = setInterval(this.soundTheAlarm.bind(this), 1000)

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
