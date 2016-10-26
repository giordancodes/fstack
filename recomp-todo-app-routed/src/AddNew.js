import React from 'react';
import mixpanel from 'mixpanel-browser';

class AddNew extends React.Component {
	
	constructor(){
		super();
		this.state = {
			newTodo: ''
		}
	}
	
	render(){
		return(
			<div className="col-xs-12">
				<form onSubmit={ (e) => this.addTodo(e) }>
					<input placeholder="nouveau item..." 
						type="text" className="col-xs-4" 
						onChange={ this.updateNewTodo } 
						value={ this.state.newTodo } />
					<button 
						className="col-xs-2" 
						onClick={ this.addTodo }>Addition</button>
					<button
						onClick={ this.login }>
						Log
					</button>
				</form>
			</div>
		)
	}

	updateNewTodo = (e) => {
		this.setState({ newTodo: e.target.value });
	}
	
	addTodo = (e) => {
		e.preventDefault();

		// mixpanel.track("Added Todo", {
		// 	newTodo: this.state.newTodo
		// })
		this.props.onAdd(this.state.newTodo);
		this.setState({ newTodo: ''});
	}

	

	updateText = (i, e) => {
//			1. Pull this.state.todos into a variable
//			2. Modify the 'text' property if todos[i] to 'event.target.value'
//			3. Call this.setState to re-render
		const t = this.state.todos;
		t[i].item = e.target.value;
		this.setState({ todos: t });
	}
			
	updateCheck = (i) => {
		const t = this.state.todos;
//			short form for turning true into false & vice versa
//			t[0].checked = !t[0].checked;
		t[i].checked = !t[i].checked;

		this.setState({ todos: t });
	}

	login(){
		// sets a unique identifier for all events logged by a user
		mixpanel.identify("thisguy@momo.com");
		mixpanel.people.set({
			'$first_name': 'Gio',
			'$last_name': 'B',
			'$email': 'this@that.com',
			'ergo': false
		})
	}
	
}

export default AddNew;