import React from 'react';

class TodoItemsAll extends React.Component {
	
	constructor(){
		super();
	}

  render() {
		console.log(this, 'TodoAll');
		const component = this;
		var items = this.props.todos.filter((todo) => todo.checked );
		return(
			<div className="row">
				<TodoList items={ items } />
			</div>
		)
	}

	onUpdateCheck = (i) => {
		this.props.updateCheck(i);
	}
		
	onUpdateText = (i, e) => {
		this.props.updateText(i, e);
	}
}


export default TodoItemsAll;