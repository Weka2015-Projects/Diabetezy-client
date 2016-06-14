import React, {Component} from 'react'
import $ from 'jquery'

class Day extends Component {
	handleClick() {
	this.props.clickCb(this.props.index)
	$('.day').removeClass('katie')
	$(`#${this.props.index}`).addClass('katie')
	}

	render() {
		return <div className="day" onClick={this.handleClick.bind(this)} id={this.props.index}>{this.props.index+1}</div>
	}
}

export default Day

