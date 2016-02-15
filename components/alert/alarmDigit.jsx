import React, {Component} from 'react'

class AlarmDigit extends Component {
  constructor(props){
    super()
  }


  render() {
    return(
      <div>
        <p>{this.props.counterVal}</p>
      </div>
      )
    }
  }

export default AlarmDigit
