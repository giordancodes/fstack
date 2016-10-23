index.js
	<Router history={ browserHistory }>
		<Route 	path='/' 
						component={ TodoList } />
		<Route 	path='/:filter' 
						component={ TodoList } />
	</Router>

TodoList
	componentDidMount
		this.firebaseRef
	render:
		var items = this.props.todos
		if (this.props.params.filter == 'unchecked') {
			// do some filtering
		} else if (this)
			// filter
		} else {
			// don't
		}

		return <div>

		</div>