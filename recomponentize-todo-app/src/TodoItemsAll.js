import React from 'react';

class TodoItemsAll extends React.Component {

	static propTypes = {
		todos: React.PropTypes.array.isRequired,
		updateCheck: React.PropTypes.string.isRequired,
		updateText: React.PropTypes.string.isRequired
	}
	
  render() {
		const component = this;

		return(
			<div className="row">
				{ this.props.todos.map((todo, i) => {
					return(
						<div className="col-xs-12" key={ i } >
							<input className="col-xs-2" 
								type="checkbox" 
								checked={ todo.checked } 
								onChange={ component.onUpdateCheck.bind(component, i) }
							 />
							<input type="text" 
								className="col-xs-10" 
								htmlFor={ todo.item } 
								value={ todo.item }
								onChange={ component.onUpdateText.bind(component, i) }
							/>
						</div>
					)
				})
				}
			</div>
		)
	}

	onUpdateCheck(i) {
		this.props.updateCheck(i);
	}
		
	onUpdateText(i, e) {
		this.props.updateText(i, e);
	}
}

export default TodoItemsAll;