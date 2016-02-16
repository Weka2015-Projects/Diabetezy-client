import React, {Component} from 'react'
import $ from 'jquery'

class Day extends Component {

	handleClick() {
	this.props.clickCb(this.props.index)
	}

	render() {
		return <div className="day" onClick={this.handleClick.bind(this)}>{this.props.index+1}</div>
	}
}

export default Day

