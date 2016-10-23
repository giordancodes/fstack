index.js
	<Recomp />

var Recomp = React.createClass

	componentDidMount: {
		this.firebaseRef = 
	}

	render: <Router history={ browserHistory }>
		<Route path='/'
					 todos={ this.state.todos }
					 component={ TodoItemsAll } />

	</Router>

	TodoItemsAll = react.createClass 

		render: 
			this.props.route.todos


