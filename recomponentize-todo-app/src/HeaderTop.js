import React from 'react';

class HeaderTop extends React.Component {
	
	render(){
		return(
			<header><h1>{ this.props.todos.length }</h1></header>
		)
	}
}

export default HeaderTop;