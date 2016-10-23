index.js
	<Router history={ browserHistory }>
		<Route path='/' component={ ReComp} >
			<IndexRoute  
							component={ TodoItemsAll } />
			<Route 	path='checked' 
							component={ TodoItemsChecked } />
			<Route 	path='unchecked' 
							component={ TodoItemsUnchecked } />
		</Route>
	</Router>

var Recome = React.createClass

	componentDidMount: {
		this.firebaseRef = 
	}

	render: 
		{ React.cloneElement(this.props.children, { todos: this.state.todos })}

	TodoItemsAll = react.createClass 

		render: 
			this.props.route.todos

	
