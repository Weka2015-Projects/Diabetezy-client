import React, {Component} from 'react'
import {Link} from 'react-router'


class Graph extends Component{
	render() {
		return (
			<div>
			<Link to={`/home`}>Home</Link>
			<div>Graph Page</div>
			</div>
		)
	}
}

export default Graph