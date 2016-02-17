import React, {Component} from 'react'
import routes from './routes.jsx'
import Alarm from './alert/alarm.jsx'

class App extends Component{
	render() {
		return (
			<div className="index">
        		<Alarm />
        		<div id="routes">
				{routes}
				</div>
			</div>
		)
	}
}

export default App
