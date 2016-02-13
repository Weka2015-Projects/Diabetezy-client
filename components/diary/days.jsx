import React, {Component} from 'react'

class Day extends Component {

	handleClick() {
	this.props.clickCb(this.props.index)
	}

	render() {
		return <div className="day" onClick={this.handleClick.bind(this)}>{this.props.index+1}</div>
	}
}

export default Day

// var tests = [
// {id: '1', day: '1', blood_test: '3.0'},
// {id: '2', day: '3', blood_test: '6.8'},
// {id: '3', day: '5', blood_test: '9.7'},
// {id: '4', day: '8', blood_test: '2.5'},
// ]

// var days = [
// {id: '1', day: tests.day},
// {id: '2', day:},
// {id: '3', day:},
// {id: '4', day:}
// ]
