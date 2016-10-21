import React from 'react';

class TodoState extends React.Component {

  render() {

		return(
			<div className="row">
				{ this.props.children }
			</div>
		)
	}
}

export default TodoState;