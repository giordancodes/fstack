import React from 'react';

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
				<button className="col-xs-2" 
					onClick={ this.addTodo }>Addition</button>
			</div>
		)
	}
	
	updateNewTodo(e){
		this.setState({ newTodo: e.target.value });
	}
	
	addTodo(){
		this.props.onAdd(this.state.newTodo);
		this.setState({ newTodo: ''});
	}
	
}

export default AddNew;