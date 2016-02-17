import React, {Component} from 'react'
import routes from './routes.jsx'

class App extends Component{
	render() {
		return (
			<div>
				<div className='main'>{routes}</div>
			</div>
		)
	}
}

export default App