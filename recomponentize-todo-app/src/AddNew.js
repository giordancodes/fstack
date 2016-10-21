import React from 'react';
import mixpanel from 'mixpanel-browser';

class AddNew extends React.Component {
	
	constructor(){
		super();
		this.updateNewTodo = this.updateNewTodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.state = {
			newTodo: ''
		}
	}
	
	render(){
		return(
			<div className="col-xs-12">
				<input placeholder="nouveau item..." 
					type="text" className="col-xs-4" 
					onChange={ this.updateNewTodo } 
					value={ this.state.newTodo } />
				<button 
					className="col-xs-2" 
					onClick={ this.addTodo }>Addition</button>
				<button
					onClick={ this.login }>
					Loggez-vous
				</button>
			</div>
		)
	}
	
	login(){
		// sets a unique identifier for all events logged by a user
		mixpanel.identify("thisguy@momo.com");
		mixpanel.people.set({
			'$first_name': 'Gio',
			'$last_name': 'B',
			'$email': 'thisguy@momo.com',
			'this guy': false
		})
	}

	updateNewTodo(e){
		this.setState({ newTodo: e.target.value });
	}
	
	addTodo(){
		mixpanel.track("Added Todo", {
			newTodo: this.state.newTodo
		})
		this.props.onAdd(this.state.newTodo);
		this.setState({ newTodo: ''});
	}
	
}

export default AddNew;